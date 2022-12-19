import './FakeSignupPage.css'
import logoNoName from '../assets/images/logo-noname.png'
import appStore from '../assets/images/app-store.png'
import { Link } from 'react-router-dom';
import MainNavbar from "../components/MainNavbar";
import SecondNavbar from "../components/SecondNavbar";

const FakeSignupPage = () => {
  return ( 
    <div className="FakeSignupPage">
      <MainNavbar />
      <SecondNavbar />
      <h2 style={{color: "black", marginTop: "16px"}}>Sign up Page</h2>
      <fieldset style={{border: "1px solid lightgray", marginTop: "25px"}}>
        <img src={ logoNoName } alt="Logo" className='logo-login' style={{width: "110px"}}/>
        <p className='p-signup'>Sign up to create and edit your recipes</p>
        <form className='login-form'>
          <div className="email">
            <input type="text" placeholder='Mobile Number or Email'/>
          </div>
          <div className="full-name">
            <input type="text" placeholder='Full Name'/>
          </div>
          <div className="password-signup">
            <input type="password" placeholder='Password'/>
          </div>
          <div className="username username-input">
            <input type="text" placeholder='Username'/>
          </div>
        </form>
        <p className='policy'>By signing up, you agree to our <span className="learn-more">Terms , Privacy Policy and Cookies Policy</span></p>
        <Link to={'/login'}><button type="button" class="btn-login" style={{fontWeight: "700"}}>Sign Up</button></Link>
      </fieldset>
      <p className='no-account'>Have an account? <span className="signup"><Link to={'/login'}>Log in</Link></span></p>
      <p>Get the app.</p>
      <a href="https://www.apple.com/ca/app-store/" target="_blank" rel="noopener noreferrer"><img src={ appStore } alt="App Buttons" className='app-store'/></a>
    </div>
   );
}
 
export default FakeSignupPage