const router = require('express').Router()
const Empresa = require('../model/empresa/empresaModel')
const bcrypt = require('bcrypt')

module.exports = class empresaController {
    // GET all
    static async index(req, res) {
        try {
            const empresas = await Empresa.find()
            res.status(200).json({
                enterprises: empresas
            })
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }

    // GET one
    static async show(req, res) {
        try {
            const { empresaId } = await req.body
            const empresa = await Empresa.findById(empresaId)
                .populate('curtidas')
                .exec()
            res.status(200).json({ empresa: empresa })
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }

    // POST
    static async store(req, res) {
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
                res.status(201).json({
                    message: 'Empresa criada',
                    user: empresa
                })

                // Quando tiver pronto
                // res.status(201).json({
                //     nome: novaEmpresa.nome,
                //     areaAtuacao: novaEmpresa.areaAtuacao,
                //     local: novaEmpresa.local,
                //     email: novaEmpresa.email,
                //     senha: novaEmpresa.senha
                // })
            })
        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    }

    //UPDATE
    static async update(req, res) {
        try {
            const { empresaId } = req.body
            const { email, nome, local, areaAtuacao } = req.body
            const updateEmpresa = {
                nome: nome,
                email: email,
                areaAtuacao: areaAtuacao,
                local: local
            }
            await Empresa.findByIdAndUpdate(empresaId, updateEmpresa)
            res.status(200).json({ mensagem: 'Empresa Atualizada!' })
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }

    // DELETE
    static async destroy(req, res) {
        try {
            const { empresaId } = req.body
            empresaId.delete({empresaId})

            res.status(200).json({ mensagem: 'Empresa Excluída!' })
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }
}