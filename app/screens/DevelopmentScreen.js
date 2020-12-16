import React, { useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native'; import {
  LineChart
} from "react-native-chart-kit";
import { Dimensions, ScrollView } from "react-native";

import initialState from '../../initialState.json';
import Screen from "../components/Screen";
import colors from "../utilities/colors";


export default function DevelopmentScreen(props) {
  const rawData = initialState.developmentData;
  const scrollView = useRef();
  const labels = [];
  const data = [];
  rawData.map((item) => labels.push(item.date))
  rawData.map(item => data.push(item.percentile))

  const calcWidth = () => {
    if (data.length * 70 < Dimensions.get("window").width) return Dimensions.get("window").width;
    return data.length * 70;
    
  }

  return (
    <React.Fragment>
      <ScrollView 
        horizontal 
        ref={scrollView}
        style={ styles.scrollView }
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
          >
          <LineChart
            data={{
              labels: labels,
              datasets: [
                {
                  data: data
                }
              ]
            }}
            width={calcWidth()} // from react-native
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
        <Screen style={ styles.screen }>
          <Text style={styles.heading}>Your last entry</Text>
          <Text style={ styles.text }>Date: {labels[data.length - 1]}</Text>
          <Text style={styles.text}>Weight: {initialState.weight}</Text>
          <Text style={styles.text}>Height: {initialState.height}</Text>
        </Screen>
    </React.Fragment>
  );
};


const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  screen: {
    paddingLeft: 30
  },
  scrollView: {
    paddingTop: 40,
    paddingBottom: 0,
    marginBottom: 0,
    height: "30%"
  },
  text: {
    fontSize: 20,
    marginBottom: 10
  }
});