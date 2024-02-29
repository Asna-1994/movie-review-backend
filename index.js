require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors')
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const port = 3000

app.use(cors());
app.use(express.json());
app.use('/movies',movieRoutes)
app.use('/reviews', reviewRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on process.env.PORT ${port}`)
})



main().then(() => console.log("Database Connected Successfully")).catch(err => console.log(err));

async function main() {

    url =  process.env.DB_URL
    password = process.env.DB_PASSWORD
    urlWithPassword = url.replace('<password>', password)
  await mongoose.connect(urlWithPassword);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}