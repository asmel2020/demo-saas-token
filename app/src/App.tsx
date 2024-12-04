import Routes from "./routes/Routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-1 justify-center">
        <Routes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
