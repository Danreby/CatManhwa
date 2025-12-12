import { useTheme } from "@/src/components/common/button/ThemeContext";
import MangaCard from "@/src/components/common/MangaCard";
import SearchBar from "@/src/components/common/SearchBar";
import Footer from "@/src/components/system/Footer";
import { footerSpacing } from "@/src/components/system/layout";
import NavBar from "@/src/components/system/NavBar";
import { useMangaStore } from "@/src/hooks/useMangaStore";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Search(): JSX.Element {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const paddingBottomValue = footerSpacing(insets);

  const { mangas, toggleRead } = useMangaStore();
  const [query, setQuery] = React.useState("");

  const filtered = mangas.filter((m) => {
    if (!query) return true;
    return (
      m.title.toLowerCase().includes(query.toLowerCase()) || (m.author || "").toLowerCase().includes(query.toLowerCase())
    );
  });

  const handleFooterPress = () => {};

  return (
    <SafeAreaView className={`flex-1 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <NavBar title="Pesquisar" />

      <ScrollView contentContainerStyle={{ paddingBottom: paddingBottomValue }} showsVerticalScrollIndicator={false}>
        <View className="px-4 py-4">
          <SearchBar value={query} onChangeText={setQuery} placeholder="Pesquisar mangás ou autores" />

          <Text className={`text-lg font-semibold mt-6 ${theme === "dark" ? "text-white" : "text-black"}`}>Resultados</Text>

          <View className="mt-3">
            {filtered.map((m) => (
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
