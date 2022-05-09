const app = require('express')();
const {PORT, SERVER_START_TEXT} = require("./src/core/constantes/constantes");

app.get('/', (request, response)=>{
    response.status(200).send(SERVER_START_TEXT);
});

app.listen(PORT, ()=>console.log(`${SERVER_START_TEXT}${PORT}`))