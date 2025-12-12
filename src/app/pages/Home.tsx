import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import CategoryPill from "@/src/components/common/CategoryPill";
import MangaCard from "@/src/components/common/MangaCard";
import SearchBar from "@/src/components/common/SearchBar";
import Footer from "@/src/components/system/Footer";
import { footerSpacing } from "@/src/components/system/layout";
import NavBar from "@/src/components/system/NavBar";
import { useTheme } from "../../components/common/button/ThemeContext";
import { useMangaStore } from "@/src/hooks/useMangaStore";

type FooterKey = "home" | "search" | "profile";

const GENRES = [
  "Ação",
  "Romance",
  "Comédia",
  "Drama",
  "Sobrenatural",
  "Esporte",
];

type Manga = {
  id: string;
  title: string;
  author?: string;
  chaptersRead?: number;
  totalChapters?: number;
  genres?: string[];
  coverUri?: string;
  isRead?: boolean;
};

const SAMPLE_MANGAS: Manga[] = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i + 1),
// Removed SAMPLE_MANGAS as we will use useMangaStore to manage mangas
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  const [query, setQuery] = React.useState("");
  const [selectedGenre, setSelectedGenre] = React.useState<string | null>(null);
  const [filter, setFilter] = React.useState<"all" | "read" | "unread">("all");
  const [mangas, setMangas] = React.useState<Manga[]>(SAMPLE_MANGAS);

  const { mangas, toggleRead, loading } = useMangaStore();
  const paddingBottomValue = footerSpacing(insets);

  const handleFooterPress = (key: FooterKey): void => {
    console.log("Footer press:", key);
  };

  const toggleRead = (id: string) => {
    setMangas((prev) => prev.map((m) => (m.id === id ? { ...m, isRead: !m.isRead } : m)));
  };

  const filtered = mangas.filter((m) => {
    if (filter === "read" && !m.isRead) return false;
    if (filter === "unread" && m.isRead) return false;
    if (selectedGenre && !(m.genres || []).includes(selectedGenre)) return false;
    if (query && !m.title.toLowerCase().includes(query.toLowerCase()) && !(m.author || "").toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  const readCount = mangas.filter((m) => m.isRead).length;

  return (
    <SafeAreaView className={`flex-1 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <NavBar title="Catálogo" subtitle={`${readCount} lidos`} />

      <ScrollView contentContainerStyle={{ paddingBottom: paddingBottomValue }} showsVerticalScrollIndicator={false}>
        <View className="px-4 py-4">
          <SearchBar value={query} onChangeText={setQuery} placeholder="Pesquisar mangás ou autores" />

          <View className="flex-row items-center mt-4">
            <TouchableOpacity onPress={() => setFilter("all")} className={`mr-3 px-3 py-1 rounded-full ${filter === "all" ? "bg-blue-500" : theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
              <Text className={`text-sm ${filter === "all" ? "text-white" : theme === "dark" ? "text-white" : "text-black"}`}>Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilter("read")} className={`mr-3 px-3 py-1 rounded-full ${filter === "read" ? "bg-green-500" : theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
              <Text className={`text-sm ${filter === "read" ? "text-white" : theme === "dark" ? "text-white" : "text-black"}`}>Lidos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilter("unread")} className={`px-3 py-1 rounded-full ${filter === "unread" ? "bg-red-500" : theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
              <Text className={`text-sm ${filter === "unread" ? "text-white" : theme === "dark" ? "text-white" : "text-black"}`}>Não lidos</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
            const [query, setQuery] = React.useState("");
            const [selectedGenre, setSelectedGenre] = React.useState<string | null>(null);
            const [filter, setFilter] = React.useState<"all" | "read" | "unread">("all");
            const { mangas, toggleRead, loading } = useMangaStore();
              <CategoryPill key={g} title={g} active={g === selectedGenre} onPress={() => setSelectedGenre(g === selectedGenre ? null : g)} />
            ))}
          </ScrollView>

          <Text className={`text-lg font-semibold mt-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
            Meus mangás
          </Text>
            // toggleRead provided by useMangaStore
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
