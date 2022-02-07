const sql = require('mssql');

var config = {
    user: '',
    password: '',
    server: '',
    database: '',
    trustServerCertificate: true
}

module.exports = function MyObject(col) {
    this.getDetailsByPass = async (pass) => {
        try {
            let connection = await sql.connect(config);
            let res = await connection.request().query(`
            select * from Details
            where Pass = ${pass}
            `);
            return res.recordset[0];
        } catch (err) {
            console.log('line 21', err);
        }
    }
    this.addDetails = async (data) => {
        try {
            let connection = await sql.connect(config);
            let res = await connection.request().query(`
            insert into Details
            values('${data.title}','${data.text}','${data.password}')
            `);
            return res.rowsAffected[0];
        } catch (err) {
            console.log('line 33', err);
        }
    }
}