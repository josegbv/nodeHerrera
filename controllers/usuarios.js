const { response } = require('express')


const usuariosGet = (req, res = response) => {

    const {limit, page} = req.query

    res.json({
        msg: 'get api controller',
        limit,
        page
    });
  }


const usuariosPut = (req, res) => {

    const {id} = req.params

    res.json({
        msg: 'put controller',
        id
    });
  }

const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body
    res.json({
        msg: 'post controller',
        nombre,
        edad
    });
  }

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete controller'
    });
  }

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch controller'
    })

}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}