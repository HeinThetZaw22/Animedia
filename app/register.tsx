import Icon from "@/assets/icons";
import BackButton from "@/components/back-button";
import Button from "@/components/button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/screen-wrapper";
import { theme } from "@/constants/theme";
import { heightPercent, widthPercent } from "@/helpers/common";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Alert,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Register = () => {
  const nameRef = useRef<string>(null);
  const emailRef = useRef<string>(null);
  const passwordRef = useRef<string>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    const name = nameRef.current?.trim();
    const email = emailRef.current?.trim();
    const password = passwordRef.current?.trim();

    if (!name || !email || !password) {
      Alert.alert("Register", "Please fill all the fields");
      return;
    }

    try {
      setLoading(true);
      //skipped email confirmation step in supabase
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });
      console.log("data", data);
      console.log("error", error);

      if (error) {
        Alert.alert("Register Error", error.message);
      } else {
        Alert.alert("Success", "Account create success");
        // router.push("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <BackButton onPress={() => router.back()} />

        <View>
          <Text style={styles.welcomeText}>Let's</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>

        {/* FORM  */}
        <View style={styles.form}>
          <Text style={styles.textLabel}>
            Please fill the details to create an account
          </Text>
          <Input
            placeholder="Enter your name"
            onChangeText={(value) => (nameRef.current = value)}
            icon={<Icon name="user" size={20} strokeWidth={1.6} />}
          />
          <Input
            placeholder="Enter your email"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(value) => (emailRef.current = value)}
            icon={<Icon name="mail" size={20} strokeWidth={1.6} />}
          />
          <Input
            placeholder="Enter your password"
            onChangeText={(value) => (passwordRef.current = value)}
            secureTextEntry
            icon={<Icon name="lock" size={20} strokeWidth={1.6} />}
          />
          <Text style={styles.forgotPassword}>Forgot password?</Text>
          <Button label="Register" loading={loading} onPress={onSubmit} />
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.textLabel}>Already have an account?</Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text style={styles.footerText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: widthPercent(5),
  },
  welcomeText: {
    fontSize: heightPercent(4),
    fontWeight: theme.fonts.bold,
    color: theme.color.text,
  },
  form: {
    gap: 25,
  },
  textLabel: {
    fontSize: heightPercent(1.6),
    color: theme.color.text,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: theme.fonts.semibold,
    color: theme.color.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    fontSize: heightPercent(1.6),
    color: theme.color.primaryDark,
    fontWeight: theme.fonts.semibold,
  },
});
