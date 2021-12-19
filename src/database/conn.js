const sql = require('mssql');
const config = require('./config.js')

module.exports = async (command) => {
    try {
        await sql.connect(config)
        return await sql.query(command)
    } catch (err) {
        console.error(err)
    }
}