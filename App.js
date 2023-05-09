import { AppContextProvider } from "./src/context/Auth";
import { Router } from "./src/routes/Router";

export default function App() {
  return (
    <AppContextProvider>
      <Router />;
    </AppContextProvider>
  );
}
