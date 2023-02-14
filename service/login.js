
const fs = require('fs');

const login = function (user, res) {

    fs.readFile('../json/account.json', 'utf8', function (err, data) {
        let authenticated = false;
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data); // parse the json to append the data rather than inserting data everytime
            console.log("User Data:", obj)
            obj.forEach(element => {
                // Check if user exist
                if (element.email == user.email.toLowerCase()) {
                    if (element.password == user.password) {
                        authenticated = true;
                        res.send({ authenticated })
                    }
                    else {
                        authenticated = false;
                        res.send({ authenticated })
                    }
                }
            });

        }
    });
}

module.exports = login;