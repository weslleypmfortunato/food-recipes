import "./Credits.css"
import BettyCrocker1 from '../assets/images/bettyCrocker/bettyCrocker1.png'
import BettyCrocker2 from '../assets/images/bettyCrocker/bettyCrocker2.png'
import BettyCrocker3 from '../assets/images/bettyCrocker/bettyCrocker3.png'

const Credits = () => {
  return ( 
    <div className="Iframe">
      <a href="https://www.bettycrocker.com/recipes/slow-cooker-meaty-italian-spaghetti-sauce/937dbd6a-ba73-4713-a159-685446433b52?utm_source=facebook&utm_medium=social_organic&utm_campaign=recipe&fbclid=IwAR1Bv6JKQNvoLM0ACW4b28gloq5QEVCitG5RP2M7PjDDeJMkANWZGQuH3g8" target="_blank" rel="noreferrer"><img src={ BettyCrocker1 } alt="Betty Crocker Recipe" /></a>

      <a href="https://www.bettycrocker.com/recipes/slow-cooker-pork-sauerkraut-and-kielbasa/48b624bf-0f37-4c38-b9c7-b558ab00b294?utm_source=facebook&utm_medium=social_organic&utm_campaign=recipe&fbclid=IwAR1QQoZWV-Xay07wlX3Ytg4L_CCpt-Ke_lAwDBvl0u11qWV6OBYHCkLl9Sc" target="_blank" rel="noreferrer"><img src={ BettyCrocker2 } alt="Betty Crocker Recipe" /></a>

      <a href="https://www.bettycrocker.com/menus-holidays-parties/mhplibrary/holidays/last-minute-apps-for-new-years-eve?utm_source=facebook&utm_medium=social_organic&utm_campaign=recipe&fbclid=IwAR3n9T0Trt6sDfKAIT9SNZRY5kBz_DcIxaHiMXYDHn6IHsWG3IIcnSb5UTg" target="_blank" rel="noreferrer"><img src={ BettyCrocker3 } alt="Betty Crocker Recipe" /></a>
    </div>
   );
}
 
export default Credits;