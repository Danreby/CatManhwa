import React from "react";
import { TextInput, View } from "react-native";
import { useTheme } from "./button/ThemeContext";

type Props = {
  value?: string;
  onChangeText?: (t: string) => void;
  placeholder?: string;
};

const SearchBar: React.FC<Props> = ({ value = "", onChangeText, placeholder = "Pesquisar" }) => {
  const { theme } = useTheme();

  return (
    <View
      className={`mt-4 rounded-lg px-3 py-2 flex-row items-center ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } border border-gray-200`}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme === "dark" ? "#A0A0A0" : "#6B7280"}
        className={`flex-1 ${theme === "dark" ? "text-white" : "text-black"}`}
        accessibilityLabel="Campo de busca"
      />
    </View>
  );
};

export default SearchBar;
