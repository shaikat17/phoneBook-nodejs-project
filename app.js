const express = require("express");
const morgan = require('morgan');


const routes = require('./routes')

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/contacts', routes)


app.get('*', (req,res) => {
	res.send(`<center style='margin-top:200px'><h1>404</h1>
		<h3>Please use the correct routes</h3></center>`)
})

const PORT= process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
})


