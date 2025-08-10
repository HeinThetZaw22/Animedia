import { Dimensions } from "react-native";

const { width: DeviceWidth, height: DeviceHeight } = Dimensions.get("window");

export const heightPercent = (percentage: number) => {
  return (DeviceHeight * percentage) / 100;
};

export const widthPercent = (percentage: number) => {
  return (DeviceWidth * percentage) / 100;
};
