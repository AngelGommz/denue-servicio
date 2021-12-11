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
//1.- Aceder a la informacion proporcionada por la INEGI (error)
//2.- Buscar primero el estado "https://gaia.inegi.org.mx/wscatgeo/geo/mgee/buscar/aguas"
//3.- Si no lo encuentra buscar la Localidad "https://gaia.inegi.org.mx/wscatgeo/geo/mgem/buscar/aguas"
//*Cualquiera de estos me genera o me trae la cordenadas de busqueda.(Si es que no hago la conexion, no tengo los elementos de tenerlo ya puedo manipularlos)
//4.- Fucionarlo con el negocio y hacer la busqueda "https://www.inegi.org.mx/app/api/denue/v1/consulta/Buscar/camiones/21.85717833,-102.28487238/250/[aquí va tu Token]"
//*Si se se cuenta con varias cordenadas meterlo en un ForEach y de esta manera mostrarlo en la paguina