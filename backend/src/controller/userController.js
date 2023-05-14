const router = require('express').Router();
const User = require('../model/user/userModel');

router.post('/', (req, res)=>{
    const {email, senha, nome, resumo} = req.body;
    const novoUsuario = new User({
        email: email,
        senha:senha,
        nome:nome,
        resumo:resumo
    })
    novoUsuario.save().then((user)=>{
        res.status(201).json({ message: 'Usuario criado'});
    }).catch((error) => {
        console.log(error);
        if (error.code === 11000 && error.keyPattern.email === 1) {
            res.status(400).json({ code:11000, message: 'O email já está sendo usado por outro usuário. Por favor, escolha outro email.' });
        } else {
            res.status(500).json({ error: error });
        }
    });
})

//UPDATE

//READ

module.exports = router