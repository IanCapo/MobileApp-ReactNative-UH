const memories = require('../store/memories');
const milestones = require('../store/milestones');

const router = app => {
  // memories
  app.get('/memories', (req, res) => {
    res.send(memories.getMemories())
  });

 app.get('/memories/:id', (req, res) => {
   const memoryId = parseInt(req.params.id);
   const memory = memories.getMemoryById(memoryId);

   res.send({
     memory
   })
 });

 app.post('/memories', (req, res) => {
   memories.addMemory(req.body)
   res.status(201).send(`Added memory with id ${req.body.id}`)
 })


// milestones
  app.get('/milestones', (req, res) => {
    res.send(milestones.getMilestones())
  });

  app.get('/milestones/:id', (req, res) => {
    const milestoneId = parseInt(req.params.id);
    const milestone = milestones.getMilestoneById(milestoneId);

    res.send({
      milestone
    })
  })
};

app.post('/milestones', (req, res) => {
  milestones.addMilestone(req.body)
  res.status(201).send(`Added milestone with id ${req.body.id}`)
})



module.exports = router;