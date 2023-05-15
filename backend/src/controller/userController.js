const router = require('express').Router();
const User = require('../model/user/userModel');

router.get("/teste", (req, res)=>{
    res.status(200).json({msg: "Deu certo"})
})

//CREATEs
router.post('/', (req, res)=>{
    const {email, senha, nome, resumo} = req.body;
    const novoUsuario = new User({
        email: email,
        senha:senha,
        nome:nome,
        resumo:resumo
    })
    novoUsuario.save().then((usuario)=>{
        res.status(201).json({ message: 'Usuario criado', user: usuario});
        console.log("Usuario criado")
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ error: error });
    });
})

//UPDATE
router.put('/', async (req, res)=>{
    const {userId} = req.body;
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
router.get('/', async (req, res)=>{
    const {userId} = req.body;
    try{
        const usuario = await User.findById(userId).exec();
        res.status(200).json({ usuario: usuario});
    }catch(err){
        res.status(500).json({error: err})
    }
})

module.exports = router