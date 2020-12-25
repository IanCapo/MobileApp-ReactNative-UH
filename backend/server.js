const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

routes(app);

const server = app.listen(port, (err) => {
  if(err) return console.log(`Error: ${err}`);
  console.log(`Server listening on port ${server.address().port}`);
})

