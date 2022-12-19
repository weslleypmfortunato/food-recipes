import './FakeLoginPage.css'
import logoNoName from '../assets/images/logo-noname.png'
import appStore from '../assets/images/app-store.png'
import { Link } from 'react-router-dom';
import MainNavbar from "../components/MainNavbar";
import SecondNavbar from "../components/SecondNavbar";

const FakeLoginPage = () => {
  return ( 
    <div className="FakeLoginPage">
      <MainNavbar />
      <SecondNavbar />
      <h2 style={{color: "black", marginTop: "32px"}}>Login Page</h2>
      <fieldset style={{border: "1px solid lightgray", marginTop: "50px"}}>
        <img src={ logoNoName } alt="Logo" className='logo-login' style={{width: "110px"}}/>
        <form className='login-form'>
          <div className="login">
            <input type="email" placeholder='Username or email'/>
          </div>
          <div className="password">
            <input type="password" placeholder='Password'/>
          </div>
        </form>
        <Link to={'/new-recipe'}><button type="button" class="btn-login" style={{fontWeight: "700"}}>Log in</button></Link>
        <p>Forgot password?</p>
      </fieldset>
      <p className='no-account'>Don't have an account? <span className="signup"><Link to={'/signup'}>Sign up</Link></span></p>
      <p>Get the app.</p>
      <a href="https://www.apple.com/ca/app-store/" target="_blank" rel="noopener noreferrer"><img src={ appStore } alt="App Buttons" className='app-store'/></a>
    </div>
   );
}
 
export default FakeLoginPage
