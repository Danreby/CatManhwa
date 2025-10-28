import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

type FooterProps = {
  onPress?: (key: "home" | "search" | "profile") => void;
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ onPress, className = "" }) => {
  return (
    <View className={`absolute bottom-0 left-0 right-0 z-10 ${className}`}>
      <SafeAreaView className="bg-white border-t border-gray-200">
        <View className="flex-row justify-around items-center py-3">
          <TouchableOpacity
            onPress={() => onPress?.("home")}
            className="flex-1 items-center py-2"
            accessibilityLabel="Ir para início"
          >
            <Text className="text-sm">Início</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onPress?.("search")}
            className="flex-1 items-center py-2"
            accessibilityLabel="Pesquisar"
          >
            <Text className="text-sm">Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onPress?.("profile")}
            className="flex-1 items-center py-2"
            accessibilityLabel="Perfil"
          >
            <Text className="text-sm">Perfil</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Footer;
