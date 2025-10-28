import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import HomeIcon from "../common/icon/HomeIcon";
import SearchIcon from "../common/icon/SearchIcon";

type FooterProps = {
  onPress?: (key: "home" | "search" | "profile") => void;
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ onPress, className = "" }) => {
  return (
    <View className={`absolute bottom-0 left-0 right-0 z-10 ${className}`}>
      <View className="flex-row justify-around items-center py-3">
        <TouchableOpacity
          onPress={() => onPress?.("home")}
          className="flex-1 items-center py-2"
          accessibilityLabel="Ir para início"
        >
          <Text className="text-sm"><HomeIcon type={2}/></Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onPress?.("search")}
          className="flex-1 items-center py-2"
          accessibilityLabel="Pesquisar"
        >
          <Text className="text-sm"><SearchIcon type={1}/></Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onPress?.("profile")}
          className="flex-1 items-center py-2"
          accessibilityLabel="Perfil"
        >
          <Text className="text-sm">Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
