import './HomePage.css'
import MainNavbar from "../components/MainNavbar";
import SecondNavbar from "../components/SecondNavbar";
import Cards from '../components/Cards';
import Carousell from '../components/Carousell';
import AdSense2 from '../components/AdSense2';
import AdSense1 from '../components/AdSense1';
import Footer from '../components/Footer';

const HomePage = () => {
  return ( 
    <div className="HomePage">
      <MainNavbar />
      <SecondNavbar />
      <div className="HomePage">
        <div className="row">
          <div className="col title-carousel">
            <div className="adsense2">
              <AdSense2 />
              <Carousell />
              <AdSense2 />
            </div>
            <div className="Cards">
              <Cards />
              <Cards />
              <Cards />
            </div>
            <AdSense1 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
   );
}
 
export default HomePage;