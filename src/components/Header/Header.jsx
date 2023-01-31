import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
   return (
      <div className="flex header">
         <div className="flex nav">
            <a href="#about">About</a>
            <a href="#partners">Partners</a>
         </div>
         <div>
            <img src={logo} alt="avatar" className="avatar" />
         </div>
         <div className="flex nav">
            <a href="#tokenomics">Tokenomics</a>
            <a href="#roadmap">Roadmap</a>
         </div>
      </div>
   );
};

export default Header;
