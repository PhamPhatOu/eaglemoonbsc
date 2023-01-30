import "./Hero.css";
import illus from "../../assets/hero.png";

const Hero = () => {
   return (
      <div className="hero">
         <div className="main">
            <div className="title">EAGLE MOON</div>
            <div className="slogan">Little project - Big dream</div>
            <a href="/" className="button-container">
               <div className="button title-section">Buy EGM</div>
            </a>
         </div>
         <img src={illus} alt="background" className="hero-illus" />
         <div className="scrolldown">Scroll down </div>
      </div>
   );
};

export default Hero;
