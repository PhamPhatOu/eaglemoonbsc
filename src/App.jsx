import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Partners from "./components/Partners/Partners";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Roadmap from "./components/Roadmap/Roadmap";

function App() {
   return (
      <div className="app">
         <Header />

         <main>
            <Hero />
            <About />
            <Partners />
            <Tokenomics />
            <Roadmap />
         </main>

         <Footer />
      </div>
   );
}

export default App;
