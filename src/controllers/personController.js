const query = require('../database/conn.js')

exports.get = async (req, res, next) => {
    let result = await query('select * from [tblTeste]')
    res.status(200).send(result)
}

exports.post = async (req, res, next) => {
    let value = req.body.value
    let result = await query(`insert into tblTeste (Valor) values ('${value}')`)
    res.status(201).send(result.rowsAffected)
}

exports.put = async (req, res, next) => {
    let id = req.params.id
    let day = req.body
    let result = await query(`update [tblTeste] set [Valor] = '${day.value}' where [Id] = ${id}`)
    res.status(201).send(result.rowsAffected)
}

exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let result = await query(`delete from [tblTeste] where [Id] = ${id}`)
    res.status(200).send(result.rowsAffected)
}