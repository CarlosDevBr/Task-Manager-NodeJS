const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'cahzerohenrique@gmail.com',
    from: 'henrique.h@aluno.ifsp.edu.br',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})