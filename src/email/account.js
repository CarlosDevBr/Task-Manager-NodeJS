const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'henrique.h@aluno.ifsp.edu.br',
        subject: 'Thanks for joining in!',
        text: `Welcome to app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'henrique.h@aluno.ifsp.edu.br',
        subject: 'Sorry to see you go!',
        text: `Goodbye ${name}. I hope to see you back sometime soon. `
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}