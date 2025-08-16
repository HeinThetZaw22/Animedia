import ScreenWrapper from "@/components/screen-wrapper";
import { useAuth } from "@/context/auth-context";
import { supabase } from "@/lib/supabase";
import React from "react";
import { Alert, Button, StyleSheet, Text } from "react-native";

const Home = () => {
  const { user } = useAuth();
  console.log("user", user);

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Error", "Error signing out");
    }
  };
  return (
    <ScreenWrapper>
      <Text>Home</Text>
      <Button title="Logout" onPress={logout}></Button>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
