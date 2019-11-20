const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyParser.urlencoded({ extended:false})); //đọc req từ body 
app.use(express.static(path.join(__dirname, '/public')));

app.set("view engine", "handlebars")
app.engine("handlebars", handlebars({defaultLayout: "user"}));  //layout: file name

app.listen(3000, (err)=> {
    if(err) {
        console.log('err');
    }
        console.log('listen port 3000');
});

const admin = require('./routes/admin.js')
admin(app)
app.get('/home', admin);

const quynh = require('./routes/quynhRoute.js')
app.get('/quynh', quynh)
//err function
// let a = ()=>{

// }

// let a= "quynhxinhahihi"
// let str = `123 ${a}`
// console.log(str);