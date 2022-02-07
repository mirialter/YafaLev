const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const sqlConnection = require('./sql/sqlConnection')

const app = express();
const port = process.env.port || 5000;
const sql = new sqlConnection()

app.use(bp.json());
app.use(bp.urlencoded());
app.use(cors());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.post('/copy', async (req, res) => {
    ans = await sql.addDetails(req.body.data);
    res.json(ans);
});

app.post('/paste', async (req, res) => {
    ans = await sql.getDetailsByPass(req.body.pass);
    res.json(ans);
});