import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "./button/ThemeContext";

type Props = {
  id: string;
  title: string;
  author?: string;
  chaptersRead?: number;
  totalChapters?: number;
  genres?: string[];
  coverUri?: string;
  isRead?: boolean;
  onToggleRead?: (id: string) => void;
};

const MangaCard: React.FC<Props> = ({
  id,
  title,
  author,
  chaptersRead,
  totalChapters,
  genres,
  coverUri,
  isRead,
  onToggleRead,
}) => {
  const { theme } = useTheme();

  return (
    <View className={`flex-row items-center p-3 rounded-lg mb-3 ${theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}>
      {coverUri ? (
        <Image source={{ uri: coverUri }} resizeMode="cover" className="w-20 h-28 mr-3 rounded" />
      ) : (
        <View className="w-20 h-28 mr-3 rounded bg-gray-300 items-center justify-center">
          <Text className="text-xs text-gray-700">Capa</Text>
        </View>
      )}

      <View className="flex-1">
        <Text className={`text-base font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>{title}</Text>
        {author ? <Text className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{author}</Text> : null}

        <View className="flex-row items-center mt-2">
          {typeof chaptersRead === "number" && typeof totalChapters === "number" ? (
            <Text className="text-sm mr-3">Capítulos: {chaptersRead}/{totalChapters}</Text>
          ) : null}

          {Array.isArray(genres) && genres.length ? (
            <Text className="text-sm text-gray-500">{genres.slice(0, 2).join(", ")}</Text>
          ) : null}
        </View>

        <View className="flex-row items-center mt-3">
          <TouchableOpacity
            onPress={() => onToggleRead?.(id)}
            className={`px-3 py-1 rounded-md ${isRead ? "bg-green-500" : "bg-blue-500"}`}
          >
            <Text className="text-sm text-white">{isRead ? "Lido" : "Marcar como lido"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MangaCard;
