let profile = {
  "name": "baby",
  "dob": "09.06.2020",
  "weight": 2640,
  "height": 46.5,
  "head": 48,
  "image": {
    "url": "/Users/fabian/Documents/University of Hertfordshire/Mobile Computing/A_2/client/app/assets/_R9A9401.jpg"
  }
};

const getProfile = () => profile;

const updateProfile = (profile, key, value) => {
  if(key === "image") {
    profile[key]["url"] = value;
  } else {
    profile[key] = value;
  }
}

module.exports = {
  getProfile,
  updateProfile
};