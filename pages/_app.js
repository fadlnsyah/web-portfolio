import "@/styles/global.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageProvider>
  );
}
