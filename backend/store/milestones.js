let milestones = [
  {
    "title": "I am born",
    "id": 1,
    "icon": "baby-carriage",
    "date": "09.06.2020",
    "image": {
      "url" : "/Users/fabian/Documents/University of Hertfordshire/Mobile Computing/A_2/client/app/assets/_R9A9401.jpg"
    },
    "info": "Babies usually take their first steps around 8-12 months"
  },
  {
    "title": "My first bottle",
    "id": 2,
    "icon": "baby-bottle-outline",
    "date": "10.06.2020",
    "image": {
      "url": null
    }
  },
  {
    "title": "My first smile",
    "id": 3,
    "icon": "baby-face-outline",
    "date": null,
    "image": {
      "url": null
    }
  },
  {
    "title": "I can sit",
    "id": 4,
    "icon": "foot-print",
    "date": null,
    "image": {
      "url": null
    }
  },
  {
    "title": "I can stand",
    "id": 5,
    "icon": "foot-print",
    "date": null,
    "image": {
      "url": null
    }
  },
  {
    "title": "First step",
    "id": 6,
    "icon": "foot-print",
    "date": null,
    "image": {
      "url": null
    }
  }
];



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