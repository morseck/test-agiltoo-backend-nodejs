const app = require('express')();
const bodyParser = require('body-parser');
const apiRouter = require('./src/routes/route.api').router;
const {API_ROUTE} = require('./src/core/constantes/constantes')

//Body parser configuration
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const {PORT, SERVER_START_TEXT} = require("./src/core/constantes/constantes");

app.get('/', (request, response)=>{
    response.status(200).send(SERVER_START_TEXT);
});

/**
 * Configure router
 */
app.use(API_ROUTE, apiRouter);

app.listen(PORT, ()=>console.log(`${SERVER_START_TEXT}${PORT}`))