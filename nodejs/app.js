const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/',(req, res) =>{
    //res.setHeader('Content-type', 'text/html');
    res.send('Pag Principal');
})

app.get('/municipios', (req, res) => {
    const file = fs.readFileSync('https://gaia.inegi.org.mx/wscatgeo/geo/mgee/buscar/aguas', 'UTF-8');
    console.log(file);
})

app.listen(3000, () => {
    console.log('Servidor listo .....');
});