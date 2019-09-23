if(process.env.MODE_ENV === 'production'){
    module.exports = require('./prod');
    console.log("wowoww");
} else{
    module.exports = require('./dev');
}