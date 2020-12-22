const express = require('express');
const port = 3002;
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

routes(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

const server = app.listen(port, (err) => {
  if(err) return console.log(`Error: ${err}`);
  console.log(`Server listening on port ${server.address().port}`);
})

