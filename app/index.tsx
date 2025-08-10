import ScreenWrapper from "@/components/screen-wrapper";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const IndexPage = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View>
        <Text>IndexPage</Text>
        <Text onPress={() => router.push("/welcome")}>Go to Welcome</Text>
      </View>
    </ScreenWrapper>
  );
};

export default IndexPage;
