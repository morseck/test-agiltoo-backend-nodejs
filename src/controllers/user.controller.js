const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    /**
     *
     * @param request
     * @param response
     */
    register: async (request, response) => {
        //Recuperations des parametres
        var nom = req.body.nom;
        var prenom = req.body.prenom;
        var password = req.body.password;
        var email = req.body.email;


        //Verification des parametres obligatoire
        if (nom == null || prenom == null || password == null || email == null)
            return resp.status(400).json({'error': 'Veuillez renseigner les champs obligatoires'})

        if (!EMAIL_REGEX.test(email))
            return resp.status(400).json({'error': 'Adresse email invalide'})

        if (!PASSWORD_REGEX.test(password))
            return resp.status(400).json({'error': 'Le mot doit avoir 6 à 12 caractères et contenir au moins un chiffre'})


        let user = await foundUser(email); //Verifier l'existence du User a travers le email
        if (user.status === 200) {
            bcrypt.hash(password, 5, async (err, bcryptedPassword) => {
                let newUser = await createUser(req, bcryptedPassword);//Creer un nouvel user en cryptant son password
                if (newUser.status === 200) return resp.status(newUser.status).send(newUser.body)
                else return resp.status(newUser.status).json({'error': newUser.body})
            })
        } else return resp.status(user.status).json({'error': user.body})


    },

    /**
     *
     * @param request
     * @param response
     */
    login: (request, response)=>{

    }
}