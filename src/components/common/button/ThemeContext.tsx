// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

const THEME_KEY = "@myapp:theme";

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("light");

  // Load stored theme or system preference at mount
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(THEME_KEY);
        if (mounted) {
          if (stored === "dark" || stored === "light") {
            setThemeState(stored as Theme);
          } else {
            const sys = Appearance.getColorScheme() === "dark" ? "dark" : "light";
            setThemeState(sys);
          }
        }
      } catch (e) {
        // ignore, fallback already "light"
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // React to system theme changes only if user has NOT saved a preference
  useEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) => {
      (async () => {
        try {
          const stored = await AsyncStorage.getItem(THEME_KEY);
          if (!stored) {
            setThemeState(colorScheme === "dark" ? "dark" : "light");
          }
        } catch (e) {}
      })();
    });
    return () => sub.remove();
  }, []);

  const setTheme = async (t: Theme) => {
    setThemeState(t);
    try {
      await AsyncStorage.setItem(THEME_KEY, t);
    } catch (e) {}
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
