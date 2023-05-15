const router = require('express').Router();
const Curso = require('../model/user/cursosModel');

router.post('/',(req,res)=>{
    const {empresa, resumo, datainicio, datatermino} = req.body;

    const novaCurso = new Curso ({
        empresa: empresa,
        resumo: resumo,
        datainicio: datainicio,
        datatermino: datatermino
    })
    novoCurso.save().then((Curso)=>{
        res.status(201).json({ message: 'Curso criado'});
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ error: error });
    })
})