import Footer from "@/src/components/system/Footer";
import NavBar from "@/src/components/system/NavBar";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Home() {
  const handleFooterPress = (key: "home" | "search" | "profile") => {
    console.log("Footer press:", key);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <NavBar title="Página Inicial" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 90 }}
        className="px-4"
      >
        <View className="w-full h-full flex-1 justify-center items-center py-8">
          <Text className="text-base">Este é um teste.</Text>

          <View className="mt-6 w-full">
            <Text className="text-sm text-gray-600">
              Aqui você pode adicionar cards, listas ou componentes do seu app.
            </Text>
          </View>
        </View>
      </ScrollView>

      <Footer onPress={handleFooterPress} />
    </SafeAreaView>
  );
}
