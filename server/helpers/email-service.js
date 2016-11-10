var nodemailer = require('nodemailer');
var smtpPool = require('nodemailer-smtp-pool');
var EmailTemplate = require('email-templates').EmailTemplate;
var path = require('path');
var EmailTemplate = require('email-templates').EmailTemplate;

var transporter = nodemailer.createTransport(smtpPool({
    service: 'gmail',
    auth: {
        user: "your_emailid",
        pass: "your_password"
    },
    maxConnections: 20
}));
var sendMail = function(from, recipients, subject, bodyObject, mailTemplate, callback) {
    var mytemplate = new EmailTemplate(path.join(__dirname, '..', 'views', mailTemplate));
    mytemplate.render(bodyObject, function(err, results) {
        if (err) return callback(err);
        var mailOptions = {
            from: from,
            to: recipients.to,
            cc: recipients.cc,
            bcc: recipients.bcc,
            subject: subject,
            html: results.html,
            text: results.text
        };
        console.log(mailOptions);
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return callback(error);
            }
            callback(null, info);
        });
    });
};

module.exports = {sendMail : sendMail};