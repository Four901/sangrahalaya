



const connectToMongoose=require('./db')

connectToMongoose();

var cors = require('cors')//to make connection between....yes i know 
const express = require('express')

const app = express()



app.use(cors())
app.use(express.json())



const port =process.env.PORT||5000

//routes


app.use('/api/inventory',require('./routes/manage')),
app.use('/api/auth',require('./routes/auth')),
app.use('/api/current',require('./routes/currentmanage')),
app.use('/api/items',require('./routes/ItemsDetails'))








app.get('/', (req, res) => {
  res.send('Hello BhaiLog!')
})
app.listen(port, () => {
  console.log(`Bhaii spardha listening on port ${port}`)
})

