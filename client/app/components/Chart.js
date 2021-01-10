import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native'; import {
  LineChart
} from "react-native-chart-kit";
import { Dimensions, ScrollView } from "react-native";

import colors from "../utilities/colors";

export default function Chart({ graphData, labels, backgroundGradientFrom}) {
  const scrollView = useRef();

  const calcWidth = (data) => {
    if (data.length * 70 < Dimensions.get("window").width) return Dimensions.get("window").width;
    return data.length * 70;
  }

  return (
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
          backgroundColor: "#e26a00",
          backgroundGradientFrom: backgroundGradientFrom,
          backgroundGradientTo: backgroundGradientFrom,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 15,
            paddingTop: 20,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: `${colors.primary}`
          }
        }}
        bezier
        style={{
          borderRadius: 5,
          marginVertical: 0
        }}
      />
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  scrollView: {
    height: 200
  }
});