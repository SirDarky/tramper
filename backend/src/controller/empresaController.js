const router = require('express').Router()
const Empresa = require('../model/empresa/empresaModel')
const Vagas = require("../model/empresa/vagasModel")
const bcrypt = require('bcrypt')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const fs = require('fs')

//Teste feito
router.get("/teste", (req, res)=>{
    const userId = req.userId;
    const isEmpresa = req.tipoUser;
    console.log(userId)
    res.status(200).json({msg: "Deu certo", user: userId, isEmpresa: isEmpresa})
})

//Todas empresas
router.get('/', async(req,res) =>{
    try {
        const empresas = await Empresa.find()
        res.status(200).json({
            enterprises: empresas
        })
    } catch (err) {
        res.status(500).json({ error: err })
    }
})
// Empresa propria
router.get('/myuser', async(req,res)=>{
    try {
        const empresaId =  req.userId
        const empresa = await Empresa.findById(empresaId)
            .exec()
        res.status(200).json({ empresa: empresa })
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

//
router.put('/myuser', async(req, res)=>{
    const empresaId =  req.userId
    const { email, nome, local, areaAtuacao } = req.body
    try {
        const updateEmpresa = {
            nome: nome,
            email: email,
            areaAtuacao: areaAtuacao,
            local: local
        }
        await Empresa.findByIdAndUpdate(empresaId, updateEmpresa)
        res.status(200).json({ mensagem: 'Empresa Atualizada!' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

//criação de vagas
router.post('/vagas', async(req,res)=>{
    const empresaId =  req.userId
    const { cargo, salario, beneficios, requisito, descricao, localVaga, areaAtuacao } = req.body
    try{
        const novaVaga = new Vagas({
            cargo: cargo,
            salario: salario,
            beneficios: beneficios,
            requisito: requisito,
            descricao: descricao,
            localVaga: localVaga,
            areaAtuacao: areaAtuacao,
            empresa: empresaId
        })
        novaVaga.save().then(vaga => {
            res.status(201).json({
                message: 'Vaga criada',
                vaga: vaga
            })
        })
    }catch (err) {
        res.status(500).json({ error: err })
    }
})

//delete de vagas
router.delete('/vagas/:vagaId', async (req, res)=>{
    const empresaId = req.userId;
    const { vagaId } = req.params;
    try {
        const vaga = await Vagas.findById(vagaId).exec();
        if (!vaga) {
            return res.status(404).json({ error: 'Vaga não encontrada' });
        }
        if (vaga.empresa.toString() !== empresaId) {
            return res.status(403).json({ error: 'Não autorizado a deletar esta vaga' });
        }
        await Vagas.findByIdAndDelete(vagaId).exec();
        res.status(200).json({
            message: 'Vaga deletada'
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }
})

//update de vagas
router.put('/vagas', async(req, res)=>{
    const empresaId = req.userId;
    const { vagaId, cargo, salario, beneficios, requisito, descricao, localVaga, areaAtuacao  } = req.body;
    try {
        const vaga = await Vagas.findById(vagaId).exec();
        if (!vaga) {
            return res.status(404).json({ error: 'Vaga não encontrada' });
        }
        if (vaga.empresa.toString() !== empresaId) {
            return res.status(403).json({ error: 'Não autorizado a atualizar esta vaga' });
        }
        await Vagas.findByIdAndUpdate(vagaId, {
            cargo: cargo,
            salario: salario,
            beneficios: beneficios,
            requisito: requisito,
            descricao: descricao,
            localVaga: localVaga,
            areaAtuacao: areaAtuacao,
        }).exec();
        res.status(200).json({
            message: 'Vaga atualizada'
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }
})

//busca de todas as minhas vagas
router.get('/vagas', async(req, res)=>{
    const empresaId = req.userId;
    try {
        const vaga = await Vagas.find({empresa: {$eq: empresaId}}).populate('canditados', 'nome email resumo photopaths cursos experiencias formacao').exec();
        res.status(200).json({vagas: vaga})
    } catch (err) {
        res.status(500).json({ error: err });
    }
})

//busca de todos os canditados
router.get('/vagas/canditados', async(req, res)=>{
    const empresaId = req.userId;
    const {vagaId}= req.body;
    try {
        const vaga = await Vagas.findById(vagaId).populate('canditados', 'nome email resumo photopaths cursos experiencias formacao').exec();
        res.status(200).json({canditados: vaga})
    } catch (err) {
        res.status(500).json({ error: err });
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
            await Empresa.findByIdAndUpdate(userId, {photopaths: newFileName}).exec()
        }
        user()
        // Responder com o caminho da foto
        res.status(200).json({ photoPath: newFileName });
      });
    } catch (error) {
      console.error('Erro ao salvar a foto:', error);
      res.status(500).json({ error: 'Erro ao salvar a foto' });
    }
  });

module.exports = router