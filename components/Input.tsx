import { theme } from "@/constants/theme";
import { heightPercent } from "@/helpers/common";
import React, { forwardRef } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type InputProps = TextInputProps & {
  icon?: React.ReactNode;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
};

const Input = forwardRef<TextInput, InputProps>(
  ({ icon, containerStyle, inputStyle, ...props }, ref) => {
    return (
      <View style={[styles.container, containerStyle]}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          ref={ref}
          style={[styles.input, inputStyle]}
          placeholderTextColor="#999"
          {...props}
        />
      </View>
    );
  }
);

Input.displayName = "Input";

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: heightPercent(6.6),
    borderWidth: 0.5,
    borderColor: theme.color.text,
    borderRadius: theme.radius.lg,
    paddingHorizontal: 18,
    backgroundColor: "#fff",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: "#000",
  },
});
