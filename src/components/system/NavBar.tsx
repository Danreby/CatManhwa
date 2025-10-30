// src/components/NavBar.tsx
import React from "react";
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../common/button/ThemeContext";
import { MoonIcon, SunIcon } from "../common/icon/ThemeIcon";

type NavBarProps = {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  right?: React.ReactNode;
};

const NavBar: React.FC<NavBarProps> = ({ title = "App", showBack = false, onBack, right }) => {
  const { theme, toggleTheme } = useTheme();
  const insets = useSafeAreaInsets();

  const androidStatusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight ?? 0 : 0;
  const topInset = Math.max(insets.top, androidStatusBarHeight);

  const paddingTop = topInset + 1;

  return (
    <View
      style={[styles.container, { paddingTop }]}
      className={`w-full flex-row items-center justify-between px-4 py-3 border-b ${
        theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <View className="flex-row items-center">
        {showBack ? (
          <TouchableOpacity onPress={onBack} accessibilityLabel="Voltar" className="mr-3 px-2 py-1">
            <Text className={`text-base ${theme === "dark" ? "text-white" : "text-black"}`}>◀</Text>
          </TouchableOpacity>
        ) : null}
        <Text className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>{title}</Text>
      </View>

      <View className="flex-row items-center">
        {right}

        <TouchableOpacity
          onPress={toggleTheme}
          accessibilityLabel="Alternar tema"
          className="ml-3 px-3 py-1 rounded-md"
        >
          <Text className="text-base">
            {theme === "dark" ? <MoonIcon color="#ffffff" /> : <SunIcon color="#FFD700" />}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
  },
});

export default NavBar;
