import Routes from "./routes/Routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Toaster />
      <Header />
      <main className="flex-1 justify-center">
        <Routes />
      </main>

      <Footer />
    </div>
  );
}
export default App;
