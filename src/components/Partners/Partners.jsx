import "./Partners.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import logo8 from "../../assets/logo8.png";

const Partners = () => {
   return (
      <div id="partners">
         <div className="title-section">Partners</div>
         <div className="container-logo">
            <div className="logo-items">
               <img src={logo1} alt="logo" />
            </div>
            <div className="logo-items">
               <img src={logo2} alt="logo" />
            </div>
            <div className="logo-items">
               <img src={logo3} alt="logo" />
            </div>
            <div className="logo-items">
               <img src={logo4} alt="logo" />
            </div>
            <div className="logo-items">
               <img src={logo5} alt="logo" />
            </div>
            <div className="logo-items">
               <img src={logo6} alt="logo" />
            </div>
            <div className="logo-items">
               <img src={logo7} alt="logo" />
            </div>
            <div className="logo-items">
               <img src={logo8} alt="logo" />
            </div>
         </div>
      </div>
   );
};

export default Partners;
