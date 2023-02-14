
const fs = require('fs');

const createUser = function (user,res) {

    fs.readFile('../json/account.json', 'utf8', function (err, data) {
        let userExist = false;
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data); // parse the json to append the data rather than inserting data everytime
            console.log("User Data:",obj)
            obj.forEach(element => {
                if (element.email.toLowerCase() == user.email.toLowerCase()) {
                    userExist = true;
                }
            });
            if (!userExist) {
                obj.push(user); //add the user
                users = JSON.stringify(obj); //convert it back to json to write it to file
                fs.writeFile('../json/account.json', users, 'utf8', function(err){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send({accountCreated:true})
                    }
                }); // write it back 
            }
            else{
                res.send({accountAlreadyExist:true})
            }
        }
    });
}

module.exports = createUser;