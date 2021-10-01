const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

const itemRoutes = require('./routes/item');

const app = express()
app.use(express.json());

app.use('/api/item', itemRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })