const addDevelopmentData = async (data) => {
  console.log(data.refDate);
  const date = data.date;
  const length = convertToInches(data.length);
  const weight = convertToPounds(data.weight);
  const sex = data.sex === 'boy' ? 1 : 2
  const months = calcMonths(data.refDate, data.date);

  const result = await getPercentile(weight, length, sex, months, date);
  const newEntry = createNewEntry(result, weight, length, date );
  
  return newEntry;
}

const convertToPounds = (g) => {
  return parseFloat(g * 0.00220462)
}

const convertToInches = (cm) => {
  return parseFloat(cm * 0.39370079)
}

const calcMonths = (a, b) => {
  console.log(a, b);
  let dateA = new Date(a).getTime();
  let dateB = new Date(b).getTime();
  let diff = (dateA - dateB) / 1000
  let result = diff / (60 * 60 * 24 * 7 * 4);
  let rounded = Math.abs(Math.round(result), 10)
  return rounded;
}

const getPercentile = async (weight, length, sex, months, date) => {
  months === 0 ? months =+1 : months = months;
  const url = `https://calm-ocean-03513.herokuapp.com/baby-percentile?sex=${sex}&months=${months}&inches=${length}&pounds=${weight}`;
  console.log(url);
  let response = await fetch(url)

  if(response.ok) {
    let json = await response.json()
      return json
  } else {
    console.log('error', response.status);
  }


}

const createNewEntry = (perc, weight, length, date) => {
    let newEntry;
    let percWeight = perc.split(',')[0];
    let percLength = perc.split(',')[1];

    newEntry = {
      date: date, percWeight: percWeight, percLenght: percLength, weight: weight, length: length
    }
    return newEntry
}


export default addDevelopmentData;