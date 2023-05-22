const router = require('express').Router()
const Empresa = require('../model/empresa/empresaModel')
const Vagas = require("../model/empresa/vagasModel")
const bcrypt = require('bcrypt')

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
            .populate('curtidas')
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
router.delete('/vagas', async (req, res)=>{
    const empresaId = req.userId;
    const { vagaId } = req.body;
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
    const {vagaId}= req.body;
    try {
        const vaga = await Vagas.find({empresa: {$eq: empresaId}}).exec();
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

module.exports = router