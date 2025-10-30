import React, { useMemo } from "react";
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Footer from "@/src/components/system/Footer";
import { footerSpacing } from "@/src/components/system/layout";
import NavBar from "@/src/components/system/NavBar";
import { useTheme } from "../../components/common/button/ThemeContext";

type FooterKey = "home" | "search" | "profile";

type CardItem = {
  id: string;
  title: string;
  subtitle?: string;
};

const SAMPLE_DATA: CardItem[] = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i + 1),
  title: `Cartão ${i + 1}`,
  subtitle: i % 2 === 0 ? "Exemplo" : undefined,
}));

export default function Home(): JSX.Element {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  const handleFooterPress = (key: FooterKey): void => {
    console.log("Footer press:", key);
  };

  const { itemWidth, horizontalPadding } = useMemo(() => {
    const screenWidth = Dimensions.get("window").width;
    const horizontalPadding = 16; 
    const gapBetweenColumns = 12; 
    const itemWidth = Math.floor((screenWidth - horizontalPadding * 2 - gapBetweenColumns) / 2);
    return { itemWidth, horizontalPadding };
  }, []);

  const paddingBottomValue = footerSpacing(insets);

  const renderItem = ({ item }: ListRenderItemInfo<CardItem>) => {
    return (
      <View style={{ width: itemWidth }}>
        <TouchableOpacity
          activeOpacity={0.85}
          style={{ minHeight: 100, justifyContent: "center" }}
          className={`rounded-lg p-3 ${
            theme === "dark"
              ? "bg-gray-800 border border-gray-700"
              : "bg-gray-100 border border-gray-200"
          }`}
        >
          <Text className={`${theme === "dark" ? "text-gray-200" : "text-gray-900"} text-base font-semibold`}>
            {item.title}
          </Text>

          {item.subtitle ? (
            <Text className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-sm mt-2`}>
              {item.subtitle}
            </Text>
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView className={`flex-1 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <NavBar title="Página Inicial" />

      <FlatList
        data={SAMPLE_DATA}
        renderItem={renderItem}
        keyExtractor={(i) => i.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 12 }}
        contentContainerStyle={{
          paddingTop: 16,
          paddingHorizontal: horizontalPadding,
          paddingBottom: paddingBottomValue,
        }}
        showsVerticalScrollIndicator={false}
      />

      <Footer onPress={handleFooterPress} />
    </SafeAreaView>
  );
}
