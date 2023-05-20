const router = require('express').Router();
const Empresa = require('../model/empresa/empresaModel');
const User = require('../model/user/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SENHA = 'tramper123'


router.post("/loginuser", async(req,res)=>{
    const {email, senha} = req.body;
    User.findOne({email: email}).exec()
        .then((usuario)=>{
            if(!usuario){
                res.status(400).json({msg: 'Usuario não encontrado'});
                return
            }
            bcrypt.compare(senha, usuario.senha, (err, result)=>{
                if(result){
                    usuario.senha = "";
                    const {id} =usuario;
                    const tokenUser = jwt.sign(id, SENHA);
                    res.status(200).json({token: tokenUser, usuario: usuario})
                } else {
                    res.status(400).json({msg: 'Email ou Senha incorreta'})
                }
            })
        }).catch((error)=>{
            res.status(500).json({ error: error });
        })
})
