import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native'; import {
  LineChart
} from "react-native-chart-kit";
import { Dimensions, ScrollView } from "react-native";

import Screen from "../components/Screen";
import RadioButton from '../components/RadioButton';
import colors from "../utilities/colors";
import cache from '../utilities/cache';
import Chart from '../components/Chart';


export default function DevelopmentScreen(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [isWeight, setIsWeight] = useState(true)
  const [myData, setMyData] = useState();

  useEffect(() => {
    const cachedData = async () => {
      const data = await cache.getData('development');
      const newDataObj = JSON.parse(data.data)
      setMyData(newDataObj);
      setIsLoading(false);
    }
    cachedData()
  }, [])

  function transformDate(date) {
    const dateArray = date.split('T')[0].split('-');
    const transformedDate = `${dateArray[1]}.${dateArray[2]}.${dateArray[0]}`;
    return transformedDate;
  }

  // const convertToGrams = (p) => {
  //   return Math.ceil((p * 453.5) / 10) * 10
  // }

  // const convertToCm = (inch) => {
  //   return Math.ceil(inch / 0.39370079)
  // }

  if(myData) {
    const sortedmyData = myData.sort((a, b) => {
      var c = new Date(a.date).getTime();
      var d = new Date(b.date).getTime();
      return c - d;
    });

    const labels = [];
    const graphDataWeight = [];
    const graphDataLength = [];
    sortedmyData.map((item) => labels.push(transformDate(item.date)))
    sortedmyData.map(item => graphDataWeight.push(Math.round(item.percWeight))) 
    sortedmyData.map(item => graphDataLength.push(Math.round(item.percLength)))

    let weight;
    let length;
    let date;

    if(myData.length < 2) {
     weight = myData[0].weight;
     length = myData[0].length;
     date = myData[0].date;
    }
    return (
      <React.Fragment>
        <View style={ styles.headlineContainer }>  
          <Text style={ styles.headline }>Percentiles</Text>
          <View>
            <RadioButton onPress={(val) => setIsWeight(val)} />
          </View>
        </View>
        <Text>{isWeight}</Text>
        {isWeight && <Chart graphData={graphDataWeight} labels={labels} backgroundGradientFrom="#91C7B1" />} 
        {!isWeight && <Chart graphData={graphDataLength} labels={labels} backgroundGradientFrom="#799496" />}
        <Screen style={styles.screen}>
          <Text style={styles.heading}>Your last entry</Text>
          <Text style={styles.text}>Date: {labels[myData.length - 1]}</Text>
          <Text style={styles.text}>Weight: {myData[myData.length - 1].weight} lbs</Text>
          <Text style={styles.text}>Percentile: {Math.round(myData[myData.length - 1].percWeight)}</Text>
          <Text style={styles.text}>Height: {myData[myData.length - 1].length} in</Text>
        </Screen>
      </React.Fragment>
  );
  } else {
    return (
      <Screen style={ styles.screen }>
        <Text>No data yet, come back later</Text>
      </Screen>
    )
  }
};


const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  headline: {
    fontSize: 24,
  },
  headlineContainer: {
    paddingTop: 40,
    width: "100%",
    alignItems:
      "center"
  },
  screen: {
    paddingLeft: 30,
    paddingBottom: 40
  },
  scrollView: {
    paddingTop: 20,
    paddingBottom: 0,
    marginBottom: 0,
    height: "30%",
    paddingLeft: 10
  },
  text: {
    fontSize: 20,
    marginBottom: 10
  }
});