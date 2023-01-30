import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
   return (
      <div className="flex header">
         <div className="flex nav">
            <a href="#about">About</a>
            <div>Partners</div>
         </div>
         <div>
            <img src={logo} alt="avatar" className="avatar" />
         </div>
         <div className="flex nav">
            <div>Tokenomics</div>
            <div>Roadmap</div>
         </div>
      </div>
   );
};

export default Header;
