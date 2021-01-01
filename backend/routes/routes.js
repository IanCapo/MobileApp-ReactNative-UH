const memories = require('../store/memories');
const milestones = require('../store/milestones');
const myProfile = require('../store/profile');
const development = require('../store/development');

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
   res.status(201).send('Added memory')
 });

  app.put('/memories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const memory = memories.getMemoryById(id);

    memories.updateMemory(memory, req.body.key, req.body.value)
    res.send(memory);
  });

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
  });

  app.post('/milestones', (req, res) => {
    milestones.addMilestone(req.body)
    res.status(201).send(`Added milestone`)
  });

  app.put('/milestones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const milestone = milestones.getMilestoneById(id);

    milestones.updateMilestone(milestone, req.body.key, req.body.value)
    res.send(milestone);
  });

  // profile
  app.get('/profile', (req, res) => {
    res.send(myProfile.getProfile())
  });

  app.post('/profile', (req, res) => {
    const profile = myProfile.getProfile();
    const data = req.body;
    for(let i = 0; i < data.length; i++) {
      myProfile.updateProfile(profile, data[i].key, data[i].value)
    }
    res.status(201).send(profile);
  });

  // development
  app.get('/development', (req, res) => {
    res.send(development.getDevelopmentData())
  });

  app.post('/development', (req, res) => {
    development.addDevelpmentData(req.body)
  })
};

module.exports = router;