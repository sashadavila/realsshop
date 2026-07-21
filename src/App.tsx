import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Catalog from "./components/Catalog/Catalog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Catalog />
        <Contact />
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;