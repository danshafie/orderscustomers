var mongoose = require("mongoose")

var orderSchema = new mongoose.Schema({
	customerName: String,
	product: String,
	quantity: Number,
	created: {type: Date, default: Date.now()}
})

mongoose.model('order', orderSchema)