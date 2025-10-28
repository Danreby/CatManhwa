import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

type NavBarProps = {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  right?: React.ReactNode;
};

const NavBar: React.FC<NavBarProps> = ({ title = "App", showBack = false, onBack, right }) => {
  return (
    <SafeAreaView className="w-full bg-white">
      <View className="w-full flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        <View className="flex-row items-center">
          {showBack ? (
            <TouchableOpacity onPress={onBack} accessibilityLabel="Voltar" className="mr-3 px-2 py-1">
              <Text className="text-base">◀</Text>
            </TouchableOpacity>
          ) : null}
          <Text className="text-lg font-semibold">{title}</Text>
        </View>

        <View>{right}</View>
      </View>
    </SafeAreaView>
  );
};

export default NavBar;
