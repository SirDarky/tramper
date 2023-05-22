const router = require('express').Router();
const User = require('../model/user/userModel');
const Vagas = require("../model/empresa/vagasModel")

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
        const usuarios = await User.find({
            _id: { $nin: usuario.curtidas },
            $and:[{_id:{$ne:userId}}]
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
            const vagas = await Vagas.find({
                areaAtuacao: areaAtuacao
            }).where('canditados').nin([userId]).exec()
            res.json(vagas)
        }else{
            const vagas = await Vagas.find().where('canditados').nin([userId]).exec()
            res.json(vagas)
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