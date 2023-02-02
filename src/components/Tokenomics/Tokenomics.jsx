import "./Tokenomics.css";
import logo from "../../assets/logo.png";

const Tokenomics = () => {
   return (
      <div id="tokenomics">
         <div className="title-section">Tokenomics</div>
         <div className="container">
            <div className="token-items">
               <div className="logo-token">
                  <img src={logo} alt="" />
               </div>
               <div className="symbol-caption title-gradient">Total supply: 1.000.000.000.000</div>
               <div className="symbol-caption title-gradient">Symbol: EGM</div>
            </div>
            <div className="token-items">
               <div className="title-tax title-gradient">Tax Buy/Sell: 10%</div>
               <div className="list-tax">
                  <p>Development: 3%</p>
                  <p>Marketing: 3%</p>
                  <p>Rewards Holder: 2%</p>
                  <p>World Wildlife Fund: 1%</p>
                  <p>Burd: 1%</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Tokenomics;
