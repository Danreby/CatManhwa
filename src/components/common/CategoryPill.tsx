import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useTheme } from "./button/ThemeContext";

type Props = {
  title: string;
  active?: boolean;
  onPress?: () => void;
};

const CategoryPill: React.FC<Props> = ({ title, active = false, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-4 py-2 rounded-full mr-3 ${
        active
          ? "bg-red-500"
          : theme === "dark"
          ? "bg-gray-800"
          : "bg-gray-100"
      }`}
    >
      <Text className={`text-sm ${active ? "text-white" : theme === "dark" ? "text-white" : "text-black"}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryPill;
