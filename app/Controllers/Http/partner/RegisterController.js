'use strict'

const axios = require('axios')

class RegisterController {

    async setSkill({request, view, response, auth}) {
        response.implicitEnd = false
        
        const {email, skill, latitude, longitude} = request.all()

        axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/buzcaapp-dnwhd/service/main_application/incoming_webhook/completeUser', {
            email: email,
            skill: skill,
            latitude: latitude,
            longitude: longitude
        })
        .then(function(res) {
            return response.redirect('/partner')
        })
        .catch(function(error) {
            console.log('nooo',error)
            return response.send('No Excelente :c')
        })

    }
}

module.exports = RegisterController
