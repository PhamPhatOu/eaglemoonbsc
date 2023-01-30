import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
   return (
      <div className="app">
         <Header />

         <main>
            <Hero />
            <About />
         </main>

         <Footer />
      </div>
   );
}

export default App;
