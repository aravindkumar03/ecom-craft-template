import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
  role: "customer" | "admin";
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved user session
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock validation
        if (email && password.length >= 6) {
          const mockUser: User = {
            id: "1",
            email,
            name: email.split("@")[0],
            role: email.includes("admin") ? "admin" : "customer",
          };
          
          setUser(mockUser);
          localStorage.setItem("user", JSON.stringify(mockUser));
          setIsLoading(false);
          resolve({ success: true });
        } else {
          setIsLoading(false);
          resolve({ success: false, error: "Invalid email or password" });
        }
      }, 1000);
    });
  };

  const signup = async (email: string, password: string, name: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock validation
        if (email && password.length >= 6 && name) {
          const mockUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            email,
            name,
            role: "customer",
          };
          
          setUser(mockUser);
          localStorage.setItem("user", JSON.stringify(mockUser));
          setIsLoading(false);
          resolve({ success: true });
        } else {
          setIsLoading(false);
          resolve({ success: false, error: "Please provide valid information" });
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
