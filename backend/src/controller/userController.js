const router = require('express').Router();
const User = require('../model/user/userModel');
const {Curso} = require('../model/user/cursoSchema');
const { Experiencia } = require('../model/user/experienciaSchema');

//Teste feito
router.get("/teste", (req, res)=>{
    res.status(200).json({msg: "Deu certo"})
})

//CREATE
//Teste feito
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
//Teste feito
router.get('/', async (req, res)=>{
    const {userId} = req.body;
    try{
        const usuario = await User.findById(userId).populate('curtidas').exec();
        res.status(200).json({ usuario: usuario});
    }catch(err){
        res.status(500).json({error: err})
    }
})


//READ ALL USERS
//Teste feito
router.get('/allusers', async (req, res)=>{
    try{
        const usuarios = await User.find();
        res.status(200).json({
            users: usuarios
        });
    } catch(err){
        res.status(500).json({error:err})
    }
})

//ADICIONAR CURTIDA
//Teste feito
router.put('/curtidas', async (req, res)=>{
    const {userId, userIdCurtido} = req.body;
    try{
        const usuarios = await User.findByIdAndUpdate(userId, {$push: {curtidas: userIdCurtido}});
        res.status(200).json({
            msg: "Tudo certo"
        });
    } catch(err){
        res.status(500).json({error:err})
    }
})

// READ ALL USERS QUE NÃO FORAM CURTIDOS OU REJEITADO OU N DERAM MATCHES
router.get('/users', async (req, res)=>{
    const {userId} = req.body;
    try {
        const usuario = await User.findById(userId);
        const usuarios = await User.find({
            _id: { $nin: usuario.curtidas },
            $and:[
                {_id:{$ne:usuario.rejeicoes}},
                {_id:{$ne:usuario.matches}},
                {_id:{$ne:userId}}
            ]
        });
        res.status(200).json({
            users: usuarios
        });
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

//ADICIONAR OS CURSOS
router.put('/cursos', async(req, res)=>{
    const {userId} = req.body;
    try{
        const {empresa, resumo, datainicio, datatermino, titulo} = req.body;
        const novoCurso = new Curso({
            empresa: empresa,
            resumo: resumo,
            datainicio: datainicio,
            datatermino: datatermino,
            titulo: titulo
        })
        await User.findByIdAndUpdate(userId, {$push: {cursos: novoCurso}})
        res.status(200).json({msg: "Tudo certo"})
    } catch(err){
        res.status(500).json({ error: err })
    }
})

//ADCIONAR AS EXPERIENCIA
router.put('/experiencia',async(req, res)=>{
    const {userId} = req.body;
    try{
        const {empresa, cargo, resumo, datainicio, datatermino} = req.body;
        const novaExperiencia = new Experiencia({
            empresa: empresa,
            cargo: cargo,
            resumo: resumo,
            datainicio: datainicio,
            datatermino: datatermino
        })
        await User.findByIdAndUpdate(userId, {$push: {experiencias: novaExperiencia}})
        res.status(200).json({msg: "Tudo certo"})
    } catch(err) {
        res.status(500).json({ error: err }) 
    }
})

//Testando filtros
router.get('/testfiltro', async(req, res)=>{
    const {userId} = req.body;
    /*
    try {
        const usuarios = await User.find({
            _id: { $nin: usersId },
        });
        res.status(200).json({
            users: usuarios
        });
    } catch (err) {
        res.status(500).json({ error: err })
    }
    */
    
})
module.exports = router