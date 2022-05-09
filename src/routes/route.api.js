const express = require('express');
const userController = require('../controllers/user.controller');
const  {TODO_ROUTE_PREFIX, USER_ROUTE_PREFIX, USER_ROUTE_LOGIN, USER_ROUTE_REGISTER} = require('../core/constantes/constantes')

/**
 * Define all route for differente controller
 * @return apiRouter
 * @type {Router}
 */
exports.router = (()=>{
    const apiRouter = express.Router();
    /**
     * Define route for user controller
     */
    apiRouter.route(USER_ROUTE_REGISTER).post(userController.register);
    apiRouter.route(USER_ROUTE_LOGIN).post(userController.login);

    /**
     * Define route for todo controller
     */

    return apiRouter
})();