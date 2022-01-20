import React from 'react';
import './contactCss.css';
const ContactForm = () =>{
    return(
        <article className="contact-article">
            <TextArea/>
            <ImageArea/>
        </article>
    );
}
const TextArea=()=>{
    return(
        <div className="text-container">
            <header className="contact-header">
                Contact Us
            </header>
            <div className="subheading-div">
                Connect - Compliment - Criticise : Your words makes us wise.
            </div>
            <div className="form-inner-div">
                        <form action="https://formsubmit.co/humaid.alam@gmail.com" method="POST">
                            <input type="text" name="name" placeholder="Your Name" /><br/>
                            <input type="email" name="email" placeholder="Your Email"/><br/>
                            <input type="text" name="message" id="message-box" placeholder="Message..."/><br/>
                            <input type="hidden" name="_captcha" value="false"/>
                            <button type="submit" className='submit-button'>Submit</button>
                        </form>
            </div>
        </div>
    );
}
const ImageArea=()=>{
    return(
        <div className="image-container">
            <img src="../images/ContactUs_svgImage.svg" alt='Contact Us Image'/>
        </div>
    );
}
export default ContactForm;