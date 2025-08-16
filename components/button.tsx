import { theme } from "@/constants/theme";
import { heightPercent } from "@/helpers/common";
import React, { useRef } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import Loader from "./loader";

interface ButtonProps {
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  label: string;
  onPress?: () => void;
  loading?: boolean;
  hasShadow?: boolean;
}

const Button = ({
  buttonStyle,
  textStyle,
  label,
  onPress,
  loading = false,
  hasShadow = true,
}: ButtonProps) => {
  const scale = useRef(new Animated.Value(1)).current;

  const animateIn = () => {
    Animated.spring(scale, {
      toValue: 0.96,
      useNativeDriver: true,
      speed: 50,
      bounciness: 0,
    }).start();
  };

  const animateOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const shadowStyle = {
    shadowColor: theme.color.dark,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        onPressIn={animateIn}
        onPressOut={animateOut}
        onPress={onPress}
        style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
      >
        {loading ? (
          <Loader color="white" size="large" />
        ) : (
          <Text style={[styles.text, textStyle]}>{label}</Text>
        )}
      </Pressable>
    </Animated.View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.color.primary,
    height: heightPercent(6.6),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.xl,
    borderCurve: "continuous",
  },
  text: {
    color: "white",
    fontSize: heightPercent(2),
    fontWeight: theme.fonts.bold,
  },
});
