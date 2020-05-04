const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/',function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/cv',function(req,res) {
  res.sendFile(__dirname + '/cv.html');
});

app.get('/celebratesomefailure',function(req,res) {
  res.sendFile(__dirname + '/celebrate-some-failure/index.html');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
