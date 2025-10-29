import Footer from "@/src/components/system/Footer";
import NavBar from "@/src/components/system/NavBar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useTheme } from "../../components/common/button/ThemeContext";

type FooterKey = "home" | "search" | "profile";

export default function Home(): JSX.Element {
  const { theme } = useTheme();

  const handleFooterPress = (key: FooterKey): void => {
    console.log("Footer press:", key);
  };

  return (
    <SafeAreaView className={`flex-1 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <NavBar title="Página Inicial" />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 90 }}
        className="px-4"
      >
        <View className="w-full h-full flex-1 justify-center items-center py-8">
          <Text className={`text-base ${theme === "dark" ? "text-gray-200" : "text-gray-900"}`}>
            Este é um teste.
          </Text>

          <View className="mt-6 w-full">
            <Text className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Aqui você pode adicionar cards, listas ou componentes do seu app.
            </Text>
          </View>
        </View>
      </ScrollView>

      <Footer onPress={handleFooterPress} />
    </SafeAreaView>
  );
}
