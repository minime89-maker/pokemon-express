const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => {
	console.log('Connection to database established')
})
.catch(() => {
	console.log('Connection to database failed')
})

const client = mongoose.connection

client.on('error',(err) => {
	console.log(err.message)
})

module.exports = client