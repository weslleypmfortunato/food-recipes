import './HomePage.css'
import MainNavbar from "../components/MainNavbar";
import SecondNavbar from "../components/SecondNavbar";
import Cards from '../components/Cards';
import Carousell from '../components/Carousell';

const HomePage = () => {
  return ( 
    <div className="HomePage">
      <MainNavbar />
      <SecondNavbar />
      <div className="HomePage">
        <div className="row">
          <div className="col title-carousel">
            <Carousell />
            <div className="Cards">
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default HomePage;