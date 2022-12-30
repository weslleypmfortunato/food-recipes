import Ad20 from '../assets/images/Ad20.png'
import Ad21 from '../assets/images/Ad21.png'
import Ad22 from '../assets/images/Ad22.png'
import Ad23 from '../assets/images/Ad23.png'
import Ad24 from '../assets/images/Ad24.png'
import Ad25 from '../assets/images/Ad25.png'
import Ad26 from '../assets/images/Ad26.png'
import Ad27 from '../assets/images/Ad27.png'
import Ad28 from '../assets/images/Ad28.png'
import Ad29 from '../assets/images/Ad29.png'
import Ad30 from '../assets/images/Ad30.png'

const AdSense2 = () => {
  const sideAdvertisings = [Ad20, Ad21, Ad22, Ad23, Ad24, Ad25, Ad26, Ad27, Ad28, Ad29, Ad30]
  const randomIndex = Math.floor(Math.random() * sideAdvertisings.length)
  const chosenSideAd = sideAdvertisings[randomIndex]
  
  return ( 
    <div>
      <img src={ chosenSideAd } alt="Advertising" style={{maxWidth: "150px", maxHeight: "300px", margin: "0px 20px"}}/>
    </div>
   );
}
 
export default AdSense2;