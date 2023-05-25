const router = require('express').Router();
const Empresa = require('../model/empresa/empresaModel');
const User = require('../model/user/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SENHA = 'tramper123'


router.post('/registroempresa',async (req, res)=> {
    try {
        const salt = await bcrypt.genSalt(12)
        const senha = await bcrypt.hash(req.body.senha, salt)
        const { email, nome, areaAtuacao, local } = await req.body
        const novaEmpresa = new Empresa({
            nome: nome,
            areaAtuacao: areaAtuacao,
            local: local,
            email: email,
            senha: senha
        })
        novaEmpresa.save().then(empresa => {
            const token = {
                id:empresa._id,
                tipoUser: 'Empresa'
            }
            const tokenUser = jwt.sign(token, SENHA);
            res.status(201).json({
                token: tokenUser, usuario:empresa, tipoUser:'Empresa'
            })
        }).catch((error) => {
            //console.log(error);
            if(error.code===11000){
                res.status(400).json({code:400})
                return
            }else{
                console.log(error)
                res.status(500).json({ error: error });
            }
            
        });
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
})

router.post('/registrouser', async (req, res)=>{
    console.log(req.body)
    const salt = await bcrypt.genSalt(12)
    const senha = await bcrypt.hash(req.body.senha, salt)
    const {email, nome, resumo, cidade, idade} = req.body;
    const novoUsuario = new User({
        email: email,
        senha:senha,
        nome:nome,
        resumo:resumo,
        idade:idade,
        cidade:cidade
    })
    novoUsuario.save().then((usuario)=>{
        const token = {
            id:usuario._id,
            tipoUser: 'User'
        }
        const tokenUser = jwt.sign(token, SENHA);
        res.status(201).json({token: tokenUser, usuario:usuario, tipoUser:'User'});
        console.log("Usuario criado")
    }).catch((error) => {
        //console.log(error);
        if(error.code===11000){
            res.status(400).json({code:400})
            return
        }else{
            console.log(error)
            res.status(500).json({ error: error });
        }
        
    });
})

router.post("/loginuser", (req,res)=>{
    const {email, senha} = req.body;
    User.findOne({email: email}).exec()
        .then((usuario)=>{
            if(!usuario){
                res.status(401).json({msg: 'Usuario não encontrado'});
                return
            }
            bcrypt.compare(senha, usuario.senha, (err, result)=>{
                if(result){
                    usuario.senha = "";
                    const {id} =usuario;
                    const token = {
                        id:id,
                        tipoUser: 'User'
                    }
                    const tokenUser = jwt.sign(token, SENHA);
                    res.status(200).json({token: tokenUser, usuario: usuario, tipoUser: 'User'})
                } else {
                    res.status(401).json({msg: 'Email ou Senha incorreta'})
                }
            })
        }).catch((error)=>{
            res.status(500).json({ error: error });
        })
})

router.post("/loginempresa", (req, res)=>{
    const {email, senha} = req.body;
    try {
        Empresa.findOne({email: email}).exec()
        .then((empresa)=>{
            if(!empresa){
                res.status(401).json({msg: 'Usuario não encontrado'});
                return
            }
            bcrypt.compare(senha, empresa.senha, (err, result)=>{
                if(result){
                    empresa.senha = "";
                    const {id} =empresa;
                    const token = {
                        id:id,
                        tipoUser: 'Empresa'
                    }
                    const tokenUser = jwt.sign(token, SENHA);
                    res.status(200).json({token: tokenUser, usuario: empresa, tipoUser: 'Empresa'})
                } else {
                    res.status(400).json({msg: 'Email ou Senha incorreta'})
                }
            })
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"erro"})
    }
})

module.exports = router