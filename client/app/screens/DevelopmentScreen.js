import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native'; import {
  LineChart
} from "react-native-chart-kit";
import { Dimensions, ScrollView } from "react-native";

import Screen from "../components/Screen";
import colors from "../utilities/colors";
import cache from '../utilities/cache';


export default function DevelopmentScreen(props) {
  const [isLoading, setIsLoading] = useState(true)
  const [myData, setMyData] = useState();

  const scrollView = useRef();

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

  const convertToGrams = (p) => {
    return Math.ceil((p * 453.5) / 10) * 10
  }

  const convertToCm = (inch) => {
    return Math.ceil(inch / 0.39370079)
  }

  const calcWidth = (data) => {
    if (data.length * 70 < Dimensions.get("window").width) return Dimensions.get("window").width;
    return data.length * 70;
  }

  if(myData) {
    
    const sortedmyData = myData.sort((a, b) => {
      var c = new Date(a.date).getTime();
      var d = new Date(b.date).getTime();
      return c - d;
    });

    const labels = [];
    const graphData = [];
    sortedmyData.map((item) => labels.push(transformDate(item.date)))
    sortedmyData.map(item => graphData.push(item.percWeight*10))
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
          <Text style={ styles.headline }>Weight percentile</Text>
        </View>
        <ScrollView
          horizontal
          ref={scrollView}
          style={styles.scrollView}
          onContentSizeChange={() => scrollView.current.scrollToEnd()}
        >
          <LineChart
            data={{
              labels: labels,
              datasets: [
                {
                  data: graphData
                }
              ]
            }}
            width={calcWidth(graphData)} // from react-native
            height={320}
            yAxisLabel=""
            yAxisSuffix="%"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: `${colors.white}`,
              backgroundGradientFrom: `${colors.primary}`,
              backgroundGradientTo: `${colors.secondary}`,
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
                paddingTop: 10
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: `${colors.yellow}`
              }
            }}
            bezier
            style={{
              borderRadius: 16,
              marginVertical: 0
            }}
          />
        </ScrollView>
        <Screen style={styles.screen}>
          <Text style={styles.heading}>Your last entry</Text>
          <Text style={styles.text}>Date: {labels[graphData.length - 1]}</Text>
          <Text style={styles.text}>Weight: &asymp; {convertToGrams(myData[myData.length - 1].weight)} g</Text>
          <Text style={styles.text}>Percentile: {Math.round(myData[myData.length - 1].percWeight * 10)}</Text>
          <Text style={styles.text}>Height: &asymp; {convertToCm(myData[myData.length - 1].length)} cm</Text>
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