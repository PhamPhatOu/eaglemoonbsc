import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
   return (
      <div id="footer">
         <div className="brand">
            <div className="logo">
               <img src={logo} alt="" />
            </div>
            <div className="brand-name">EAGLE MOON</div>
         </div>
         <div>
            <div>Join our community</div>
            <div className="logo-commu">
               <a href="/">
                  <i class="bx bxl-twitter"></i>
               </a>
               <a href="/">
                  <i class="bx bxl-telegram"></i>
               </a>
               <a href="/">
                  <i class="bx bxl-youtube"></i>
               </a>
               <a href="/">
                  <i class="bx bxl-facebook-square"></i>
               </a>
            </div>
         </div>
         <div className="copyright">
            Copyright © 2022 by EaglemoonToken All Rights Reserved.
         </div>
      </div>
   );
};

export default Footer;
