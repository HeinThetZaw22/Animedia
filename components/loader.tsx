import { theme } from "@/constants/theme";
import React from "react";
import { ActivityIndicator, View } from "react-native";

interface LoaderProps {
  size?: "small" | "large";
  color?: string;
}

const Loader = ({
  size = "large",
  color = theme.color.primary,
}: LoaderProps) => {
  return (
    <View>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

export default Loader;
