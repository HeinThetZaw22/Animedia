import Button from "@/components/button";
import ScreenWrapper from "@/components/screen-wrapper";
import { theme } from "@/constants/theme";
import { heightPercent, widthPercent } from "@/helpers/common";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const WelcomePgae = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/welcome.png")}
        />
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>Animedia</Text>
          <Text style={styles.punchLine}>
            Where every anima fans find a home and every image tell a story
          </Text>
        </View>

        <View style={styles.footer}>
          <Button
            label="Get Started"
            loading={false}
            onPress={() => router.push("/register")}
            buttonStyle={{ marginHorizontal: widthPercent(3) }}
          />
          <View style={styles.footerTextContainer}>
            <Text style={styles.textLabel}>Already have an account?</Text>
            <Pressable onPress={() => router.push("/login")}>
              <Text style={[styles.loginText]}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default WelcomePgae;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingHorizontal: widthPercent(4),
  },
  welcomeImage: {
    alignSelf: "center",
    height: heightPercent(30),
    width: widthPercent(100),
  },
  title: {
    fontSize: heightPercent(4),
    color: theme.color.text,
    fontWeight: theme.fonts.extrabold,
    textAlign: "center",
  },
  punchLine: {
    textAlign: "center",
    fontSize: heightPercent(1.7),
    paddingHorizontal: widthPercent(10),
    color: theme.color.text,
  },
  textLabel: {
    fontSize: heightPercent(1.6),
    color: theme.color.text,
  },
  footer: {
    width: "100%",
    gap: 20,
  },
  footerTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  loginText: {
    textAlign: "center",
    fontSize: heightPercent(1.6),
    color: theme.color.primaryDark,
    fontWeight: theme.fonts.semibold,
  },
});
