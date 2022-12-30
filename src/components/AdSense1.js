import Ad1 from '../assets/images/Ad1.png'
import Ad2 from '../assets/images/Ad2.png'
import Ad3 from '../assets/images/Ad3.png'
import Ad4 from '../assets/images/Ad4.png'
import Ad5 from '../assets/images/Ad5.png'
import Ad6 from '../assets/images/Ad6.png'
import Ad7 from '../assets/images/Ad7.png'
import Ad8 from '../assets/images/Ad8.png'
import Ad9 from '../assets/images/Ad9.png'
import Ad10 from '../assets/images/Ad10.png'
import Ad11 from '../assets/images/Ad11.png'
import Ad12 from '../assets/images/Ad12.png'
import Ad13 from '../assets/images/Ad13.png'
import Ad14 from '../assets/images/Ad14.png'
import Ad15 from '../assets/images/Ad15.png'
import Ad16 from '../assets/images/Ad16.png'
import Ad17 from '../assets/images/Ad16.png'

const AdSense1 = () => {
  const advertisings = [Ad1, Ad2, Ad3, Ad4, Ad5, Ad6, Ad7, Ad8, Ad9, Ad10, Ad11, Ad12, Ad13, Ad14, Ad15, Ad16, Ad17]
  const randomIndex = Math.floor(Math.random() * advertisings.length)
  const chosenAd = advertisings[randomIndex]

  return ( 
    <div>
      <img src={ chosenAd } alt="Advertising" style={{maxWidth: "600px", margin: "30px 0"}} className="adSense"/>
    </div>
   );
}
 
export default AdSense1;