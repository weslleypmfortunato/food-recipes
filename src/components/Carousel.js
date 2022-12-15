import beefStrogonoff from '../assets/images/beef-strogonoff.jpg'
import vietnameseNoodle from '../assets/images/viatnamese-noodle.jpeg'
import feijoada from '../assets/images/feijoada.jpg'
import './Carousel.css'


const Carousel = () => {
  return ( 
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      <div className="carousel-indicators">
        <button 
          type="button" 
          data-bs-target="#carouselExampleCaptions" 
          data-bs-slide-to="0" 
          className="active" 
          aria-current="true" 
          aria-label="Slide 1">
        </button>
        <button 
          type="button" 
          data-bs-target="#carouselExampleCaptions" 
          data-bs-slide-to="1" 
          aria-label="Slide 2">
        </button>
        <button 
          type="button" 
          data-bs-target="#carouselExampleCaptions" 
          data-bs-slide-to="2" 
          aria-label="Slide 3">
        </button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={ feijoada } className="d-block w-100" alt="Brazilian Feijoada"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Brazilian Feijoada</h5>
            <p>Typical Brazilian food that transcends generations.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={ beefStrogonoff } className="d-block w-100" alt="Beef Strogonoff"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Beef Stroganoff</h5>
            <p>Simple, fast and impressive recipe for a family meeting.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={ vietnameseNoodle } className="d-block w-100" alt="Vietnamese Beef Noodle"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Vietnamese Noodle</h5>
            <p>A popular Vietnamese noodle that is gaining popularity in the U.S., especially southern California.</p>
          </div>
        </div>
      </div>
      <button 
        className="carousel-control-prev" 
        type="button" 
        data-bs-target="#carouselExampleCaptions" 
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button 
        className="carousel-control-next" 
        type="button" 
        data-bs-target="#carouselExampleCaptions" 
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
   );
}
 
export default Carousel;