import { AuthProvider, useAuth } from "@/context/auth-context";
import { supabase } from "@/lib/supabase";
import { getUserData } from "@/services/user.service";
import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";

const MainLayout = () => {
  const { setAuth } = useAuth();
  const router = useRouter();

  const updateUserData = async (userData) => {
    const res = await getUserData(userData.id);
    console.log("response", res);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuth(session.user);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("session", session);
      if (session) {
        setAuth(session?.user);
        updateUserData(session?.user);
        router.replace("/home");
      } else {
        setAuth(null);
        router.replace("/welcome");
      }
    });
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

const Layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};

export default Layout;
