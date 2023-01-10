import './HomePage.css'
import MainNavbar from "../components/MainNavbar";
import SecondNavbar from "../components/SecondNavbar";
import Cards from '../components/Cards';
import Carousell from '../components/Carousell';
import AdSense2 from '../components/AdSense2';
import AdSense1 from '../components/AdSense1';
import Footer from '../components/Footer';
import Credits from '../components/Credits';

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
            <div className="Cards-highlight">
              <h4 style={{textAlign: "center", marginTop: "55px"}}>HIGHLIGHTS OF THE WEEK</h4>
              <div className='cards'>
                <Cards />
                <Cards />
                <Cards />
              </div>
            </div>
            <AdSense1 />
            <h3>Follow who inspired us</h3>
            <Credits />
          </div>
        </div>
      </div>
      <Footer />
    </div>
   );
}
 
export default HomePage;