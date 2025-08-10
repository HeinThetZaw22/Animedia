import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenWrapperProps {
  children: ReactNode;
  bg?: string;
}

const ScreenWrapper = ({ children, bg }: ScreenWrapperProps) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;

  const style: ViewStyle = {
    flex: 1,
    paddingTop,
    backgroundColor: bg || "#fff",
  };

  return <View style={style}>{children}</View>;
};

export default ScreenWrapper;
