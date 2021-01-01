let milestones = [];

const getMilestones = () => milestones;

const getMilestoneById = (id) => milestones.find((milestone) => milestone.id === id);

const addMilestone = (milestone) => {
  milestone.id = milestones.length + 1;
  milestones.push(milestone)
}

const updateMilestone = (milestone, key, value) => {
  key === "image" ? milestone[key].url = value : milestone[key] = value;
}

module.exports = {
  getMilestones,
  getMilestoneById,
  addMilestone,
  updateMilestone
};