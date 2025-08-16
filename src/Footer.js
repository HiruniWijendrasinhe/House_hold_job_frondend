import emailpicnew  from './Pictures/emailpicnew.png';
import facebooknew from './Pictures/facebooknew.png';
import linkdinew from './Pictures/linkdinew.png';
import whitelogonew from './Pictures/whitelogonew.png';
import './Footer.css';
function Footer() {
  return (
    <footer>
    <div className="site-footer">
    <div className="footer-vertical">
      <div className="footer-horizontal">
      <div>
      <img id="format" src={whitelogonew } alt="icon"/>
       </div>
      <div>
      <h3>About us</h3>
      <ul>
      <li>Our Services</li>
      <li>Privacy policy</li>
      <li>Terms of services</li>
      </ul>
      </div>
      <div>
      <h3>Navigation</h3>
            <ul>
            <li>Login</li>
            <li>Home</li>
            <li>Dashboard</li>
            </ul>
            </div>
            <div>
            <h3>Contact us</h3>
                  <ul >
                 <li className="horizontal-division">
                  <img src={emailpicnew} alt="icon"/>
                 <p>lakshikahiruni20@gmail.com</p>
                  </li>


                  <li className="horizontal-division">
                  <img src={facebooknew } alt="icon"/>
                  <p>@Skyroder</p>
                  </li>


                  <li className="horizontal-division">
                  <img src={linkdinew} alt="icon"/>
                    <p>Linkedin </p>
                    </li>

                  </ul>
                  </div>
             </div>
      <p>© 2025 HouseholdJobs Inc. All rights reserved.</p>
     </div>
      </div>
    </footer>
  );
}

export default Footer;