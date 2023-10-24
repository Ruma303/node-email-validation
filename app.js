const validator = require('validator');
const { users } = require('./db.json');

(function () {
    console.log('\n');

    const notValidEmails = [];
    //% Email
    console.warn('------Email------- \n');
    users.forEach(user => {
        if (validator.isEmail(user.email)) {
            console.log(`La mail di ${user.name} è valida`);
        } else {
            console.log(`La mail di ${user.name} non è valida`);
            notValidEmails.push(user)
        }
    });
    console.log('\n');

    //% Normalizzare le email
    console.warn('------Normalizzazione email------- \n');

    notValidEmails.forEach(user => {
        const options = {
          all_lowercase: true,
          gmail_remove_dots: false,
          gmail_remove_subaddress: false,
        };

        const normalizedEmail = validator.normalizeEmail(user.email, options);
        if (normalizedEmail) {
          console.log(`L'indirizzo email normalizzato di ${user.name} è ${normalizedEmail}.`);
        } else {
          console.log(`Impossibile normalizzare l'indirizzo email di ${user.name}.`);
        }
      });
})();