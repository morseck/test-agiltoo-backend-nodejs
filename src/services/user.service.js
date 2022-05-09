const bcrypt = require('bcrypt')
const models = require('../../models')
const jwtUtils = require('../core/helpers/functions.helpers');
const {MESSAGE_HEADER_SUCCESS,MESSAGE_HEADER_ERROR, MESSAGE_BODY, EMAIL_REGEX, PASSWORD_REGEX} = require('../core/constantes/constantes')
const {foundUser} = require("../core/helpers/functions.helpers");

module.exports = {

    register: async (request, response)=>{
        const password = request.body.password;
        const email = request.body.email;


        if ( password == null || email == null)
            return response.status(400).json({MESSAGE_HEADER_ERROR: MESSAGE_BODY.errorchampsObligatoir})

        if (!EMAIL_REGEX.test(email))
            return response.status(400).json({MESSAGE_HEADER_ERROR: MESSAGE_BODY.errorChampsEmail})

        if (!PASSWORD_REGEX.test(password))
            return response.status(400).json({MESSAGE_HEADER_ERROR: MESSAGE_BODY.errorChampsPassword})


        const user = await foundUser(email); //Verifier l'existence du User a travers le email
        if (user.status === 200) {
            bcrypt.hash(password, 5, async (err, bcryptedPassword) => {
                let newUser = await createUser(request, bcryptedPassword);//Creer un nouvel user en cryptant son password
                if (newUser.status === 200) return response.status(newUser.status).send(newUser.body)
                else return response.status(newUser.status).json({'error': newUser.body})
            })
        } else return response.status(user.status).json({'error': user.body})
    },

    /**
     * Methode qui permet de se connecter au systeme
     * @param req
     * @param resp
     * @returns {*|Json|Promise<any>}
     */
    login: (req, resp)=>{
        //Les parametres
        const email = req.body.email;
        const password = req.body.password

        if (email == null || password == null)
            return resp.status(400).json({'error': 'Veuillez renseigner les champs obligatoires'})

        //Verification si le user exist
        models.User.findOne({
            where: {email: email}
        })
            .then((userFound)=>{
                if (userFound){
                    bcrypt.compare(password, userFound.password, (errBcrypt, respBcrypt)=>{
                        return respBcrypt ?
                            resp.status(200).json({
                                "idUser": userFound.id,
                                'token': jwtUtils.generateTokenForUser(userFound)
                            }):
                            resp.status(403).json({"error": "Mot de passe invalide"})
                    })
                }else return resp.status(403).json({"error": "Cet utilisateur n'existe pas"})
            })
            .catch(err=>resp.status(500).json({'errorCatch': err}))
    },

}