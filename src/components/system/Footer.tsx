// src/components/Footer.tsx
import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../components/common/button/ThemeContext";
import HomeIcon from "../common/icon/HomeIcon";
import PersonIcon from "../common/icon/PersonIcon";
import SearchIcon from "../common/icon/SearchIcon";

type FooterProps = {
  onPress?: (key: "home" | "search" | "profile") => void;
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ onPress, className = "" }) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  const fallbackAndroid = Platform.OS === "android" && insets.bottom === 0 ? 8 : 0;
  const bottomInset = insets.bottom + fallbackAndroid;

  const paddingBottom = bottomInset;

  return (
    <View
      style={[styles.wrapper, { paddingBottom, elevation: 10, zIndex: 10 }]}
      className={`absolute bottom-0 left-0 right-0 ${theme === "dark" ? "bg-blue-950/50 border-gray-700" : "bg-white border-gray-200"} rounded-t-3xl ${className}`}
    >
      <View className="flex-row justify-around items-center py-3">
        <TouchableOpacity
          onPress={() => onPress?.("home")}
          className="flex-1 items-center py-2"
          accessibilityLabel="Ir para início"
        >
          <Text className="text-sm"><HomeIcon color={`${theme === "dark" ? "#ffffff" : "#000000"}`} type={3}/></Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onPress?.("search")}
          className="flex-1 items-center py-2"
          accessibilityLabel="Pesquisar"
        >
          <Text className="text-sm"><SearchIcon color={`${theme === "dark" ? "#ffffff" : "#000000"}`} type={1}/></Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onPress?.("profile")}
          className="flex-1 items-center py-2"
          accessibilityLabel="Perfil"
        >
          <Text className="text-sm"><PersonIcon color={`${theme === "dark" ? "#ffffff" : "#000000"}`} type={2}/></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Footer;
