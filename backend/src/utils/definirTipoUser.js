function definirTipoUser(req, res, next) {
    if(req.tipoUser === 'Empresa'){
        return next();
    }else{
        return res.status(401).send({ error: 'Usuario não autorizado' });
    }
}

module.exports = definirTipoUser;