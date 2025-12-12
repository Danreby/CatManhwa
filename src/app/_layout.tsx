import { ThemeProvider } from "@/src/components/common/button/ThemeContext";
import { Slot } from "expo-router";
import '../styles/global.css';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
