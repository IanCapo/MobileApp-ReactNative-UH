const router = app => {
  app.get('/', (req, res) => {
    console.log(`url: ${req.url}`);
    res.send({ message: 'Node.js and Express REST API' });
  })
}

module.exports = router;