let greetings = require('./greetings/index');

module.exports = function(name, lang){
    if(lang ==='en')
        greetings.greetEn(name)
    else
        greetings.greetEs(name);
}