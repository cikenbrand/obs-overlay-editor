import { Route, Routes } from "react-router-dom";
import DefaultPage from "./pages/default";
import { ThemeProvider } from "./components/theme-provider";
import { TooltipProvider } from "./components/ui/tooltip";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
        </Routes>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
