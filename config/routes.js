var orders = require('./../server/controllers/orders.js')

module.exports = function(app){
	app.post('/addOrder', function(req,res){
		console.log("this is req body", req.body)
		orders.addOrder(req,res)
	})

	app.get('/getAllOrders', function(req,res){
		orders.getAllOrders(req,res)
	})

	app.post('/removeOrder', function(req,res){
		orders.removeOrder(req,res)
	})
}