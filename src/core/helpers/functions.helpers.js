const jwt = require('jsonwebtoken')
const models = require('../../../models')
const {JWT_SIGN_SECRET, JWT_TIME_EXPIRATE, JWT_PREFIX_TOKEN} = require('../constantes/constantes')


module.exports = {
    /**
     * Methode pour generer un token à l'utilisateur nouvellement connecté
     * @param userData
     * @returns TokenSigned
     */
    generateTokenForUser: (userData)=>{
        return jwt.sign({
                idUser: userData.id,
                nom: userData.nom,
                prenom: userData.prenom,
            },
            JWT_SIGN_SECRET,
            {
                expiresIn: JWT_TIME_EXPIRATE,//Durée de vie du Token
            })
    },

    /**
     *Methode pour recuperer le token au niveau des entete d'authorisation
     * @param authorization
     * @returns {any}
     */
    parseAuthorization: (authorization)=>(authorization != null) ? authorization.replace(JWT_PREFIX_TOKEN, ''): null,

    /**
     * Methode pour recuperer le idUser en passant par la methode parseAuthorization afin de nous assurer de l'authenticité des données
     * @param authorization
     * @returns {number}
     */
    getIdUser: (authorization)=>{
        var idUser = -1;
        var token = module.exports.parseAuthorization(authorization)
        if (token != null) {
            try {
                var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                if (jwtToken!= null)
                    idUser = jwtToken.idUser
            }catch (err) {}
        }
        return idUser
    },

    /**
     * fonction asynchrone pour trouver l'existence d'un User
     * @param email
     * @return {Promise<*>}
     */
    foundUser: async (email)=>{
        let user;
        await models.User.findOne({
            attributes: ['email'],
            where: {email: email}
        })
            .then((userFound)=>{
                if (!userFound){
                    user = JSON.parse(JSON.stringify({
                        'status': 200,
                        'body': userFound
                    }))
                } else user = JSON.parse(JSON.stringify({
                    'status': 409,
                    'body': 'Cet utilisateur existe déjà'
                }))
                //resp.status(409).json({'error': 'Cet utilisateur existe déjà'})
            })
            .catch(err=> user = JSON.parse(JSON.stringify({
                    'status': 500,
                    'body': err
                })
            ))
        return user;
    }

}