import React from 'react';
import './style.css';
import './footer.css';
const FooterPanel=()=>{
    return(
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer__col">
                    <div className="footer__logos">
                        <a href="#"><img src="../images/hive_logo.svg" alt="Hive Logo" className="logo"/></a>
                        <a href="#"><img src="../images/jmi_logo.svg" alt="Jamia Logo" className="logo"/></a>
                    </div>
                    <p className="footer__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto esse harum dignissimos tenetur vel rerum accusantim!</p>
                </div>
                <div className="footer__col">
                    <h4 className="footer__heading">Contact</h4>
                    <div className="footer__social-links">
                        <a href="#"><img src="../images/linkedin.svg" alt="LinkedIn"/></a>
                        <a href="#"><img src="../images/twitter.svg" alt="Twitter"/></a>
                        <a href="#"><img src="../images/email.svg" alt="Email"/></a>
                        <a href="#"><img src="../images/instagram.svg" alt="Instagram"/></a>
                    </div>
                </div>
                <div className="footer__col">
                    <h4 className="footer__heading">Pages</h4>
                    <div className="footer__pages-links">
                        <ul className="footer__pages-links-col">
                            <li><a href="#" className="footer__pages-link">Home</a></li>
                            <li><a href="#" className="footer__pages-link">About Us</a></li>
                            <li><a href="#" className="footer__pages-link">Events</a></li>
                            <li><a href="#" className="footer__pages-link">Projects</a></li>
                            <li><a href="#" className="footer__pages-link">Contact</a></li>
                        </ul>
                        <ul className="footer__pages-links-col">
                            <li><a href="#" className="footer__pages-link">Blogs</a></li>
                            <li><a href="#" className="footer__pages-link">Discussion Forums</a></li>
                            <li><a href="#" className="footer__pages-link">Resources</a></li>
                            <li><a href="#" className="footer__pages-link">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__col">
                    <h4 className="footer__heading">Location</h4>
                    <p className="footer__text">Department of Computer Science, Jamia Millia Islamia,</p>
                    <p className="footer__text">Maulana Muhammad Ali Jauhar Marg</p>
                    <p className="footer__text">Jamia Nagar, New Delhi</p>
                    <p className="footer__text">PIN - 110025</p>
                </div>
            </div>
        </footer>
    );
}
export default FooterPanel;
