const mysql = require('mysql');
let con = mysql.createPool({
    hos:'localhost',
    user:'root',
    password:'',
    database:'Nodejs'
})
con.getConnection((error) => {
    if (!!error) {
console.log('there is an error bro!'+error)
    }else{
        console.log('connected to datbase!')
    }
})
module.exports=con