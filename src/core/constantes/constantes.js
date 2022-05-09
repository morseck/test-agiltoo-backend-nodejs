const PORT = process.env.PORT || 3000;
const SERVER_START_TEXT = 'Server stated:';

/**
 * Declare route name
 */
const API_ROUTE = '/api/';

const USER_ROUTE_PREFIX = '/user';
const TODO_ROUTE_PREFIX= '/todo';

const USER_ROUTE_LOGIN = `${USER_ROUTE_PREFIX}/login`;
const USER_ROUTE_REGISTER = `${USER_ROUTE_PREFIX}/register`;

/**
 * Declare text message
 */
const MESSAGE_HEADER_ERROR = 'error';
const MESSAGE_HEADER_SUCCESS ='success';

const MESSAGE_BODY = {
    'errorchampsObligatoir': 'Veuillez renseigner les champs obligatoires',
    'errorChampsEmail': 'Adresse email invalide',
    'errorChampsPassword': 'Le mot doit avoir 6 à 12 caractères et contenir au moins un chiffre'

}

/**
 * Define JWT constante
 */
const JWT_SIGN_SECRET = process.env.JWT_SIGN_SECRET || "0ZKDKkjdkjkdjkjdkjkjdkkdj@1kdkdlklkf338DJjdjd";
const JWT_TIME_EXPIRATE = '1h';
const JWT_PREFIX_TOKEN = 'Bearer ';

/**
 * Declare regex rules
 */
//CONSTANTES
EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
PASSWORD_REGEX = /^(?=.*\d).{6,12}$/; //Password compris entre 8 et 12 caractere et qui comprend aumoins un chifr

module.exports = {
    PORT,
    SERVER_START_TEXT,

    API_ROUTE,
    USER_ROUTE_PREFIX,
    TODO_ROUTE_PREFIX,
    USER_ROUTE_REGISTER,
    USER_ROUTE_LOGIN,

    MESSAGE_HEADER_ERROR,
    MESSAGE_HEADER_SUCCESS,
    MESSAGE_BODY,

    EMAIL_REGEX,
    PASSWORD_REGEX,

    JWT_SIGN_SECRET,
    JWT_TIME_EXPIRATE,
    JWT_PREFIX_TOKEN

}