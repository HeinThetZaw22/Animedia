import Loader from "@/components/loader";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

const IndexPage = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Loader />
    </View>
  );
};

export default IndexPage;
