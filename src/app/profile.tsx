import { useTheme } from "@/src/components/common/button/ThemeContext";
import MangaCard from "@/src/components/common/MangaCard";
import Footer from "@/src/components/system/Footer";
import { footerSpacing } from "@/src/components/system/layout";
import NavBar from "@/src/components/system/NavBar";
import { useMangaStore } from "@/src/hooks/useMangaStore";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Profile(): JSX.Element {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const paddingBottomValue = footerSpacing(insets);

  const { mangas, toggleRead } = useMangaStore();

  const read = mangas.filter((m) => m.isRead);

  const handleFooterPress = () => {};

  return (
    <SafeAreaView className={`flex-1 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <NavBar title="Perfil" subtitle={`${read.length} lidos`} />

      <ScrollView contentContainerStyle={{ paddingBottom: paddingBottomValue }} showsVerticalScrollIndicator={false}>
        <View className="px-4 py-4">
          <View className="items-center">
            <View className="w-24 h-24 rounded-full bg-gray-300 items-center justify-center">
              <Text className="text-xl font-bold">U</Text>
            </View>

            <Text className={`text-lg font-semibold mt-3 ${theme === "dark" ? "text-white" : "text-black"}`}>Usuário Exemplo</Text>
            <Text className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>user@example.com</Text>
          </View>

          <Text className={`text-lg font-semibold mt-6 ${theme === "dark" ? "text-white" : "text-black"}`}>Meus mangás lidos</Text>

          <View className="mt-3">
            {read.map((m) => (
              <MangaCard
                key={m.id}
                id={m.id}
                title={m.title}
                author={m.author}
                chaptersRead={m.chaptersRead}
                totalChapters={m.totalChapters}
                genres={m.genres}
                coverUri={m.coverUri}
                isRead={m.isRead}
                onToggleRead={toggleRead}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <Footer onPress={handleFooterPress} />
    </SafeAreaView>
  );
}
