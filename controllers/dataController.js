const dataSchema = require("../models/dataSchema.js")

const CreateNewQuestion = function(newQuestionContent, newQuestionAnswers) {
	let newQuestion = {
		questionContent: newQuestionContent,
		questionAnswers: newQuestionAnswers
	}
	dataSchema.create(newQuestion)
}

const showAllCallback = function(callback){
	dataSchema.find((err,data) => {
		if (err) {console.log(err)} else {
			callback(null,data)
		} 
	})
}

const showAllPromise = async function(){
    var data = await dataSchema.find()
    return data;
}

const updateQuestion = function(id, QuestionContent) {
	let updateQuestion = {
		questionContent: QuestionContent,
	}
	console.log(updateQuestion)
	dataSchema.findByIdAndUpdate(id, updateQuestion,(err,newData)=> {
		if (err) {console.log(err)} else {
			console.log(newData)
		}
	})
}

module.exports = {
	CreateNewQuestion,showAllCallback,showAllPromise,updateQuestion
}