// context/AuthContext.tsx
import { User } from "@/types/auth.type";
import React, { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
  user: User | null;
  // setUser: (user: User | null) => void;
  setAuth: (user: User | null) => void;
  setUserData: (user: User | null) => void;
  isAuthenticated: boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const setAuth = (authUser: any) => {
    setUser(authUser);
  };
  const setUserData = (userData: any) => {
    setUser({ ...userData });
  };

  const logout = () => {
    setUser(null);
    // optionally clear AsyncStorage or Supabase session here
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setAuth,
        setUserData,
        isAuthenticated: !!user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook for consuming context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
