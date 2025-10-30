import { Platform } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

export const BASE_FOOTER_HEIGHT = 64; // px — altere se seu footer for maior/menor

export function footerSpacing(insets: EdgeInsets | { bottom?: number } | number) {
  // aceitar tanto objeto EdgeInsets quanto número bottom
  const bottom = typeof insets === "number" ? insets : (insets?.bottom ?? 0);

  // fallback para Android quando insets.bottom for 0 (alguns devices retornam 0)
  const androidFallback = Platform.OS === "android" && bottom === 0 ? 8 : 0;

  // +1 para garantir 1px acima da área do sistema (botões/gestures)
  return bottom + androidFallback + BASE_FOOTER_HEIGHT + 1;
}
