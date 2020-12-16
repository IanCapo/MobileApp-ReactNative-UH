import React, { useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native'; import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions, ScrollView } from "react-native";

import initialState from '../../initialState.json';
import colors from "../utilities/colors";


export default function DevelopmentScreen(props) {
  const rawData = initialState.developmentData;
  const scrollView = useRef();
  const labels = [];
  const dates = [];
  rawData.map((item) => labels.push(item.date))
  rawData.map(item => dates.push(item.percentile))

  const calcWidth = () => {
    if (dates.length * 70 < Dimensions.get("window").width) return Dimensions.get("window").width;
    return dates.length * 70;
    
  }

  return (
  <ScrollView 
    horizontal 
    ref={scrollView}
    style={ styles.container }
    onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: dates
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
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 40
  }
});