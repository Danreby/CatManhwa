import { Manga, SAMPLE_MANGAS } from "@/src/data/mangas";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const STORAGE_KEY = "@catmanhwa_mangas";

export function useMangaStore() {
  const [mangas, setMangas] = useState<Manga[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          setMangas(JSON.parse(raw));
        } else {
          setMangas(SAMPLE_MANGAS);
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_MANGAS));
        }
      } catch (e) {
        console.warn("Failed to load mangas", e);
        setMangas(SAMPLE_MANGAS);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(mangas));
      } catch (e) {
        console.warn("Failed to save mangas", e);
      }
    })();
  }, [mangas]);

  const toggleRead = (id: string) => {
    setMangas((prev) => prev.map((m) => (m.id === id ? { ...m, isRead: !m.isRead } : m)));
  };

  const setAll = (arr: Manga[]) => setMangas(arr);

  return { mangas, setMangas: setAll, toggleRead, loading };
}
