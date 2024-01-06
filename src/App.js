import { useEffect } from "react";
import Main from "./layout/Main";

function App() {
  useEffect(() => {
    // app componentinin did mount
    // tüm uygulama çalıştırıldı ve yüklendi
    // Sadece 1 kere çalışır
    console.warn("APP DID MOUNT! UYGULAMA YÜKLENDİ!");
  }, []);

  return <Main />;
}

export default App;

// Linting - ESLint - EcmaScript Lint
