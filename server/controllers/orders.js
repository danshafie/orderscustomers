var mongoose = require("mongoose")
var Order = mongoose.model('order')

module.exports = (function(){
	return {
		addOrder: function(req,res){
			var order = new Order({customerName: req.body.name, product: req.body.product, quantity: req.body.quantity, created: Date.now()})

			order.save(function(err,result){
				if(err){
					console.log("error saving order", err)
				}else{
					res.redirect('/getAllOrders')
				}
			})
		},
		getAllOrders: function(req,res){
			Order.find({}, function(err,result){
				if(err){
					console.log("error getting all orders", err)
				}else{
					res.json(result)
				}
			})
		},
		removeOrder: function(req,res){
			Order.remove({_id: req.body._id}, function(err,result){
				if(err){
					console.log("error removing order", err)
				}else{
					res.redirect('/getAllOrders')
				}
			})
		}
	}
})();