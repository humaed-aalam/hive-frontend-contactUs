import './App.css';
import React from 'react';
import ContactForm from "../component/form.js";
import HeaderPanel from "../component/ContactHeader.js";
import FooterPanel from "../component/ContactFooter.js";
function App() {
  return (
    <div>
      <HeaderPanel/>
      <ContactForm/>
      <FooterPanel/>
    </div>
  );
}
export default App;
