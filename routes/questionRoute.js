const express = require('express')
const Router = express.Router();
const questionController = require('../controllers/dataController.js')

// Router.get('/question', async (req, res) => {
// 	res.metaTags = {
// 		title: "Guwir caau hoir",
// 	}
// 	let data = await questionController.showAllPromise()

// 	res.render('question', {
// 		sendData : data
// 	})
// })



Router.get('/question',  (req, res) => {
	questionController.updateQuestion('5dd4ca670e53101e10eea7e7', 'Hieuuuuuuuu')

	res.metaTags = {
		title: "Guwir caau hoir",
	}
	questionController.showAllCallback((err,data) => {
		res.render('question', {
			sendData : data
		})
	})	
})

Router.post('/add', (req, res) => {
	let Data = res.body.cauhoi
	questionController.CreateNewQuestion(Data)
	res.redirect('/question')
})

module.exports = Router