import { AppContextProvider } from "./src/context/Auth";
import { Router } from "./src/routes/Router";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  return (
    <AppContextProvider>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </AppContextProvider>
  );
}
