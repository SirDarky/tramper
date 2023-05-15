const router = require('express').Router();
const Formacao = require('../model/user/formacaoModel');

router.post('/', (req,res)=>{
    const{empresa,  datainicio, datatermino, resumo} =req.body;

    const novaFormacao = new Formacao({
        empresa: empresa,
        datainicio: datainicio,
        datatermino: datatermino,
        resumo: resumo
    })
    novaFormacao.save().then((Formacao)=>{
        res.status(201).json({ message: 'Usuario criado'});
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ error: error })
    })
});

