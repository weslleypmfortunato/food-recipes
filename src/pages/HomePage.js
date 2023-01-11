import './HomePage.css'
import MainNavbar from "../components/MainNavbar";
import SecondNavbar from "../components/SecondNavbar";
import Cards from '../components/Cards';
import AdSense2 from '../components/AdSense2';
import AdSense1 from '../components/AdSense1';
import Footer from '../components/Footer';
import Credits from '../components/Credits';
import MainRecipe from '../components/MainRecipe';

const HomePage = () => {

  return ( 
    <div className="HomePage">
      <MainNavbar />
      <SecondNavbar />
      <div className="HomePage">
        <div className="row">
          <div className="col title-carousel">
            <div className="adsense2" id='homepage-adsense'>
              <AdSense2 />
              <MainRecipe />
              <AdSense2 />
              <AdSense1 />
            </div>
            <div className="Cards-highlight">
              <h4 style={{textAlign: "center", marginTop: "15px"}}>HIGHLIGHTS OF THE WEEK</h4>
              <div className='cards'>
                <Cards />
                <Cards />
                <Cards />
              </div>
            </div>
            <AdSense1 />
            <div id="credits">
              <h3>Follow who inspired us</h3>
              <Credits />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
   );
}
 
export default HomePage;