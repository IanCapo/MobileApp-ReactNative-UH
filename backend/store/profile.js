let profile = {
  "name": "baby",
  "dob": new Date(),
  "weight": 3350,
  "length": 52,
  "sex": "boy",
  "image": {
    "url": "/Users/fabian/Documents/University of Hertfordshire/Mobile Computing/A_2/client/app/assets/baby.jpg"
  }
};

const getProfile = () => profile;

const updateProfile = (profile, key, value) => {
  if (key === "image") {
    if (value) profile["image"]["url"] = value 
  } else {
    profile[key] = value;
  }
}

module.exports = {
  getProfile,
  updateProfile
};