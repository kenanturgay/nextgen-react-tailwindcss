import { useEffect } from "react";
import Main from "./layout/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // app componentinin did mount
    // tüm uygulama çalıştırıldı ve yüklendi
    // Sadece 1 kere çalışır
    console.warn("APP DID MOUNT! UYGULAMA YÜKLENDİ!");

    toast.error("Sayfama hoşgeldin!");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
      <ToastContainer position="bottom-center" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

// Linting - ESLint - EcmaScript Lint

// .env
