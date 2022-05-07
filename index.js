const app = require('express')();
const {PORT, SERVER_START_TEXT} = require("./core/constantes/constantes");

app.get('/', (request, response)=>{
    response.setHeader('Content-Type', 'text/html');
    response.status(200).send('<h1>Bonjour serveur</h1>');
});

app.listen(PORT, ()=>console.log(`${SERVER_START_TEXT}${PORT}`))