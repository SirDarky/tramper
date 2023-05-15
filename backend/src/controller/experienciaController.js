const router = require('express').Router();
const Experiencia = require('../model/user/experienciaModel');

router.post('/',(req,res)=>{
    const {empresa, cargo, resumo, datainicio, datatermino} = req.body;
    const novaExperiencia = new Experiencia ({
        empresa: empresa,
        cargo: cargo,
        resumo: resumo,
        datainicio: datainicio,
        datatermino: datatermino
    })
    novoFormacao.save().then((Experiencia)=>{
        res.status(201).json({ message: 'Experiencia criado'});
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ error: error });
    })
})