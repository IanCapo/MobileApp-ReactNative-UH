const unirest = require('unirest');

let myDevelopmentData = [];

const getDevelopmentData = () => myDevelopmentData;

const convertToPounds = (g) => {
  return g * 0.00220462
}

const convertToInches = (cm) => {
  return cm * 0.39370079
}

const addDevelpmentData = (data) => {
  const sex = data[3].value;
  const weight = convertToPounds(data[2].value);
  const length = convertToInches(data[1].value);
  const date = data[0];
  
  getPercentile(weight, length, sex, 2, date);
}

const getPercentile = async (weight, length, sex, months, date) => {
  const url = `https://calm-ocean-03513.herokuapp.com/baby-percentile?sex=${sex}&months=${months}&inches=${length}&pounds=${weight}`;
  var req = unirest("GET", url);

  req.headers({
    "x-rapidapi-key": "b5c8fb98a5mshf004e69779bd68bp1ed195jsn26e00a546475",
    "x-rapidapi-host": "cdc-baby-percentile-weight-length.p.rapidapi.com",
    "useQueryString": true
  });


  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    let newEntry;
    let weight = res.body.split(',')[0];
    let length = res.body.split(',')[1];

    newEntry = {
      "date": date, percWeight: weight, percLenght: length
    }
    pushData(newEntry)
  });
}

const pushData = (newEntry) => {
  myDevelopmentData.push(newEntry)
}


module.exports= {
  getDevelopmentData,
  addDevelpmentData
}