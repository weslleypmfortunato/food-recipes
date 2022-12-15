import beefStrogonoff from '../assets/images/beef-strogonoff.jpg'
import { Link } from 'react-router-dom';

const Cards = () => {
  return ( 
    <div className="card" style={{width: "18rem"}}>
      <img src={ beefStrogonoff } className="card-img-top" alt="Beef Strogonoff"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to={'/'} className="btn btn-primary">Go to Recipe</Link>
      </div>
    </div>
   );
}
 
export default Cards;
