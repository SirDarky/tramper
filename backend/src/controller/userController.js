const router = require('express').Router();
const User = require('../model/user/userModel');
const Vagas = require("../model/empresa/vagasModel");
const { Curso } = require('../model/user/cursoSchema');
const { Formacao } = require('../model/user/formacaoSchema');
const { Experiencia } = require('../model/user/experienciaSchema');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const fs = require('fs')
const express = require('express')

//Teste feito
router.get("/teste", (req, res)=>{
    const userId = req.userId;
    console.log(userId)
    res.status(200).json({msg: "Deu certo", user: userId})
})

//UPDATE
router.put('/', async (req, res)=>{
    const userId = req.userId;
    const {email, nome, resumo} = req.body;
    const updateUser = {
        email: email,
        nome: nome,
        resumo: resumo
    }
    try{
        await User.findByIdAndUpdate(userId, updateUser);
        res.status(200).json({mensagem: "Tudo certo"});
    } catch(err){
        res.status(500).json({error: err})
    }
})

//READ
//Teste feito
router.get('/', async (req, res)=>{
    const userId = req.userId;
    try{
        const usuario = await User.findById(userId).exec();
        res.status(200).json({ usuario: usuario});
    }catch(err){
        res.status(500).json({error: err})
    }
})

//adicionando cursos
router.post('/cursos', async(req, res)=>{
    const userId = req.userId;
    const { empresa, nome, datainicio, datatermino, resumo}= req.body;
    const novoCurso = new Curso({
        empresa: empresa,
        nome: nome,
        resumo: resumo,
        datainicio: datainicio,
        datatermino: datatermino
    })
    await User.findByIdAndUpdate(userId, {$push: {cursos: novoCurso}});
    res.status(200).json({msg: "Curso adicionado"})
})
//adicionando experiencia
router.post('/experiencia', async(req, res)=>{
    const userId = req.userId;
    const { empresa, cargo, datainicio, datatermino, resumo}= req.body;
    const novoExperiencias = new Experiencia({
        empresa: empresa,
        cargo: cargo,
        resumo: resumo,
        datainicio: datainicio,
        datatermino: datatermino
    })
    await User.findByIdAndUpdate(userId, {$push: {experiencias: novoExperiencias}});
    res.status(200).json({msg: "Experiencia adicionado"})
})
//adiconando formacao
router.post('/formacao', async(req, res)=>{
    const userId = req.userId;
    const { empresa, curso, datainicio, datatermino}= req.body;
    const novaFormacao = new Formacao({
        empresa: empresa,
        curso: curso,
        datainicio: datainicio,
        datatermino: datatermino
    })
    await User.findByIdAndUpdate(userId, {$push: {formacao: novaFormacao}});
    res.status(200).json({msg: "Formação adicionado"})
})

//READ ALL USERS
//Teste feito
router.get('/allusers', async (req, res)=>{
    const userId = req.userId;
    try{
        const usuarios = await User.find();
        res.status(200).json({
            users: usuarios
        });
    } catch(err){
        res.status(500).json({error:err})
    }
})

//ADICIONAR CURTIDA
//Teste feito
router.put('/curtidas', async (req, res)=>{
    const userId = req.userId;
    const {userIdCurtido} = req.body;
    console.log(userIdCurtido)
    try{
        const usuarioCurtido = await User.findById(userIdCurtido);
        const matchSpawn = usuarioCurtido.curtidas.find(e=> e.toString()===userId);
        if(matchSpawn){
            await User.findByIdAndUpdate(userId, {$push: {matches: userIdCurtido}});
            res.status(200).json({
                codigo: 1000,//significa que deu match
                msg: "Tudo certo"
            });
        } else {
            await User.findByIdAndUpdate(userId, {$push: {curtidas: userIdCurtido}});
            res.status(200).json({
                msg: "Tudo certo"
            });
        }
    } catch(err){
        res.status(500).json({error:err})
    }
})

//ADICIONANDO REJEIÇÃO
router.put('/rejeicoes', async(req, res)=>{
    const userId = req.userId;
    const {userIdRejeitado} = req.body;
    try{
        await User.findByIdAndUpdate(userId, {$push: {rejeicoes: userIdRejeitado}})
        res.status(200).json({
            msg: "Tudo certo"
        });
    }catch(err){
        res.status(500).json({error:err})
    }
})

// READ ALL USERS QUE NÃO FORAM CURTIDOS OU REJEITADO OU N DERAM MATCHES
//Teste feito
router.get('/users', async (req, res)=>{
    const userId = req.userId;
    try {
        const usuario = await User.findById(userId);
        const ignoredUsers = usuario.curtidas.concat(usuario.rejeicoes, usuario.matches);
        const usuarios = await User.find({
            _id: { $nin: ignoredUsers },
            $and: [{ _id: { $ne: userId } }],
            photopaths: { $exists: true, $ne: null }
          });
        res.status(200).json({
            users: usuarios
        });
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

//BUSCA POR VAGAS
router.get('/vagas', async (req,res)=>{
    const userId = req.userId;
    const {areaAtuacao}= req.body
    try {
        if(areaAtuacao){
            const usuario = await User.findById(userId);
            const ignoredVagas = usuario.vagaRejeitada;
            const vagas = await Vagas.find({
                areaAtuacao: areaAtuacao,
                _id: { $nin: ignoredVagas },
                'empresa.photopath': { $exists: true, $ne: null }
            })
            .populate('empresa')
            .where('candidatos')
            .nin([userId])
            .exec();
            const vagasFiltradas = vagas.filter(vaga => vaga.empresa.photopath);
            res.json(vagasFiltradas);
        }else{
            const usuario = await User.findById(userId);
            const ignoredVagas = usuario.vagaRejeitada;
            const vagas = await Vagas.find({_id: { $nin: ignoredVagas }}).populate('empresa').where('canditados').nin([userId]).exec()
            const vagasFiltradas = vagas.filter(vaga => vaga.empresa.photopaths);
            res.json(vagasFiltradas);
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao buscar vagas' });
      }
})

//Inscrição na vaga
router.put('/vagas', async (req, res)=>{
    const userId = req.userId;
    const {vagaId} = req.body;
    try {
        await Vagas.findByIdAndUpdate(vagaId, {$push: {canditados: userId}});
        res.status(200).json({msg: "Tudo certo"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar vagas' });
    }
})

router.put('/vagas/dislike', async (req, res)=>{
    const userId = req.userId;
    const {vagaId} = req.body;
    try {
        await User.findByIdAndUpdate(userId, {$push: {vagaRejeitada: vagaId}});
        res.status(200).json({msg: 'Tudo certo'})
    } catch (error) {
        res.status(500).json({ error: 'Erro ao dar dislike vagas'});
    }
})

//Desinscrever da vaga
router.put('/vagas/desinscrever', async(req, res)=>{
    const userId = req.userId;
    const {vagaId} = req.body;
    try {
        await Vagas.findByIdAndUpdate(vagaId, {$pull: {canditados: userId}});
        res.status(200).json({msg: "Tudo certo"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar vagas' });
    }
})

router.post('/upload', upload.single('photo'), (req, res) => {
    const userId = req.userId;
    try {
      // Verificar se há um arquivo enviado
      if (!req.file) {
        return res.status(400).json({ error: 'Nenhum arquivo enviado' });
      }
  
      // Renomear o arquivo
      const fileExtension = path.extname(req.file.originalname);
      const newFileName = `${Date.now()}${fileExtension}`;
      const newPath = path.join(__dirname, '../../uploads', newFileName);
  
      // Mover o arquivo para a pasta definida
      fs.rename(req.file.path, newPath, (error) => {
        if (error) {
          console.error('Erro ao mover o arquivo:', error);
          return res.status(500).json({ error: 'Erro ao mover o arquivo' });
        }
        const user = async function updatePathUser() {
            await User.findByIdAndUpdate(userId, {photopaths: newFileName}).exec()
        }
        user()
        // Responder com o caminho da foto
        res.status(200).json({ photoPath: newPath });
      });
    } catch (error) {
      console.error('Erro ao salvar a foto:', error);
      res.status(500).json({ error: 'Erro ao salvar a foto' });
    }
  });

//Testando filtros
router.get('/testfiltro', async(req, res)=>{
    const {userId, userCurtido} = req.body;
    const usuarioCurtido = await User.findById(userId)
    //console.log(usuarioCurtido)
    res.status(200).json({user: usuarioCurtido})
    /*
    try {
        const usuarios = await User.find({
            _id: { $nin: usersId },
        });
        res.status(200).json({
            users: usuarios
        });
    } catch (err) {
        res.status(500).json({ error: err })
    }
    */
    
})
module.exports = router