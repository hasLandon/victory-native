import React from "react";
import { Dimensions, Platform } from "react-native";
import { G } from "react-native-svg";
import { VictoryScatter } from "victory-chart/src";

import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import { Point } from "../index";

export default class extends VictoryScatter {
  static defaultProps = {
    ...VictoryScatter.defaultProps,
    dataComponent: <Point/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };

  shouldAnimate() {
    return (Platform.OS === "android") ? false : Boolean(this.props.animate);
  }
}
