const mongoose = require('mongoose')
const Schema = mongoose.Schema //schema ddinhj nghia new table

const questionSchema = new Schema({
    questionContent: {type:String },
    questionAnswers: []
}, {
    id:true,
    timestamps: true
})

let Question = mongoose.model('question', questionSchema)

// let newQuestion = Question({
//  questionContent: 'Quynh xinh gai',
//  questionAnswers: ['co', 'yes', 'of course']
// })
module.exports = Question