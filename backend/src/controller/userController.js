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
        res.status(500).json({ error: error });
    });
})

//UPDATE

//READ

module.exports = router