const unirest = require('unirest');

let myDevelopmentData = [];

const getDevelopmentData = () => myDevelopmentData;

const convertToPounds = (g) => {
  return parseFloat(g * 0.00220462)
}

const convertToInches = (cm) => {
  return parseFloat(cm * 0.39370079)
}

const calcMonths = (a, b) => {
  let dateA = new Date(a).getTime();
  let dateB = new Date(b).getTime();
  let diff = (dateA - dateB) / 1000
  let result = diff / (60*60*24*7*4);
  let rounded = Math.abs(Math.round(result), 10)
  return rounded;
}

const addDevelopmentData = (data) => {
  console.log(data);
  const date = data[0].value;
  const length = convertToInches(data[1].value);
  const weight = convertToPounds(data[2].value);
  const isSex = data[3].value === 'boy' ? 1 : 2
  const sex = isSex;
  const months = calcMonths(data[4], data[0].value);
  
  getPercentile(weight, length, sex, months, date);
}

const getPercentile = async (weight, length, sex, months, date) => {
  console.log(months);
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
    let percWeight = res.body.split(',')[0];
    let percLength = res.body.split(',')[1];

    newEntry = {
      date: date, percWeight: percWeight, percLenght: percLength, weight: weight, length: length
    }
    pushData(newEntry)
  });
}

const pushData = (newEntry) => {
  myDevelopmentData.push(newEntry)
}


module.exports= {
  getDevelopmentData,
  addDevelopmentData
}