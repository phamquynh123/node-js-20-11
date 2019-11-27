const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose') //thaoo tac vs DB
const dataController = require('./controllers/dataController.js')

const app = express()

mongoose.connect('mongodb://localhost/nodeUnit3', {useNewUrlParser: true}, (err) => { //nodeUnit3: ten DB
	if (err) { console.log(err); }
	else { console.log('DB connected'); }
})

app.use(bodyParser.urlencoded({ extended:false})); //đọc req từ body 
app.use(express.static(path.join(__dirname, '/public')));

app.set("view engine", "handlebars")
app.engine("handlebars", handlebars({defaultLayout: "user"}));  //layout: file name

// dataController.CreateNewQuestion("Quynh hoc mongo" , 'gioi vch')
// dataController.updateQuestion('5dd4ca670e53101e10eea7e7', 'Quynhhoc mo')

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

const question = require('./routes/questionRoute.js')
app.use('/', question)

//err function
let a = ()=>{

}

// let a= "quynhxinhahihi"
// let str = `123 ${a}`
// console.log(str);