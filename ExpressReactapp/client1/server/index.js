const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
      res.send('Hello from our server!')
})


app.listen(2000,()=>{
console.log('sever is running on port 2000')
});