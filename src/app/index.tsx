import { ThemeProvider } from "../components/common/button/ThemeContext";
import Home from "./pages/Home";

export default function Index() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
