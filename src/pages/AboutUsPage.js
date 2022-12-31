import './AboutUsPage.css'
import profilePaulo from '../assets/images/profile-pictures/profile-picture-paulo.png'
import profileWeslley from '../assets/images/profile-pictures/profile-picture-weslley.png'
import instagram from '..//assets/images/logos-social-media/Instagram_Glyph_Gradient.png'
import facebook from '../assets/images/logos-social-media/facebook-mark.png'
import gitHub from '..//assets/images/logos-social-media/github-mark.png'
import linkedin from '..//assets/images/logos-social-media/linkedin-mark.png'
import MainNavbar from "../components/MainNavbar";
import SecondNavbar from "../components/SecondNavbar";

const AboutUsPage = () => {
  return ( 
    <div className="AboutUsPage">
      <MainNavbar />
      <SecondNavbar />
      <h2 style={{color: "black", margin: "20px 0"}}>A little bit about our history</h2>
      <p className='full-description'>We are two former engineers who decided for a career change in Canada. We had always been interested in technology and had a passion for problem-solving, so we began exploring the field of web development. We did some research and found that it was a rapidly growing field with plenty of opportunities for advancement. We also liked the idea of being able to work on a variety of projects and having the ability to constantly learn and grow. So, we decided to make the switch and enrolled in a web development bootcamp to learn the necessary skills. Despite the challenges we are facing along the way, we are determined to succeed and are eventually able to land jobs at companies they were excited to work for. We are grateful for the opportunity to start a new chapter in our careers and are eager to see where our new path will take us.</p>

      <div className="description">
        <div className='single-profile'>
          <img src={ profilePaulo } alt="Profile" className='profiles'/>
          <h3 style={{color: "red"}}>Paulo Xavier</h3>
          <p>I am a former engineer who had always been fascinated by the world of technology. However, after working in the engineering field for several years, I began to feel a sense of stagnation and a desire for something more. That's when I decided to make a bold move and switch careers to become a web developer. Despite the challenges and hard work that came with learning a new skill set, I was determined to succeed. I spent long hours studying and practicing to achieve a good knowledge and be ready for my first job as a web developer. Today, I am happily with the possibility to work in a field that I am truly passionate about, and I am grateful for the decision I made to pursue my dreams.</p>
          <span>Find me on Social Medias</span>
          <div className="social-medias-icons">
            <a href="https://github.com/pxaviersn" target="_blank" rel="noreferrer"><img src={ gitHub } alt="GitHub Icon" className='icons'/></a>
            <a href="https://www.facebook.com/paulo.xavier.9" target="_blank" rel='noreferrer'><img src={ linkedin } alt="LinkedIn Icon" className='icons'/></a>
            <a href="https://www.facebook.com/paulo.xavier.9" target="_blank" rel='noreferrer'><img src={ facebook } alt="Facebook Icon" className='icons'/></a>
            <a href="https://www.instagram.com/pauloxaviersn" target="_blank" rel='noreferrer'><img src={ instagram } alt="Instagram Icon" className='icons'/></a>
          </div>
        </div>
        <div className='single-profile'>
          <img src={ profileWeslley } alt="Profile" className='profiles img-profile'/>
          <h3 style={{color: "red"}}>Weslley Fortunato</h3>
          <p>Brazilian, animal lover, passionate about the Canadian weather and a ongoing web developer. After gaining enormous experience and skills in project management and quality testing in the electronics sector working for 13 years at Foxconn manufacturing Apple products, I decided to accept the challenge of restarting my life in Canada by venturing into a new college and learning web development from the scratch. Currently living in Victoria, BC, I love to hike, discover new places and create new memories with every new adventure. I am always looking for continuous improvement from the most superficial details to the final project delivery.</p>
          <span>Find me on Social Medias</span>
          <div className="social-medias-icons">
            <a href="https://github.com/weslleypmfortunato" target="_blank" rel="noreferrer"><img src={ gitHub } alt="GitHub Icon" className='icons'/></a>
            <a href="https://www.linkedin.com/in/weslleyfortunato" target="_blank" rel='noreferrer'><img src={ linkedin } alt="LinkedIn Icon" className='icons'/></a>
            <a href="https://www.facebook.com/weslley.m.fortunato" target="_blank" rel='noreferrer'><img src={ facebook } alt="Facebook Icon" className='icons'/></a>
            <a href="https://www.instagram.com/weslleypmf" target="_blank" rel='noreferrer'><img src={ instagram } alt="Instagram Icon" className='icons'/></a>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default AboutUsPage;