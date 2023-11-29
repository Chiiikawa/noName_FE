import React from 'react';
import '../App.css';
import contactus01 from '../Assets/Contactus01.png';
import contactus02 from '../Assets/Contactus02.png';
import contactus03 from '../Assets/Contactus03.png';
import contactus04 from '../Assets/Contactus04.png';
import contactus05 from '../Assets/Contactus05.png';


function ContactUs() {
  return (
<div>
   
    <div className="black01">
      <div className="text01">NO:NAME<br></br>PROJECT</div>
      <h2 className="text02"><a href="https://github.com/Chiiikawa">노_션_S.A</a></h2>
      <h2 className="text02"><a href="https://github.com/Chiiikawa/noName_FE">깃_허브_FE</a></h2>
      <h2 className="text02"><a href="https://github.com/Chiiikawa/noName_BE">깃_허브_BE</a></h2>
      
    </div>

    <div className="black02">
      <div className='contactus_set01'>
      <a href="https://github.com/Chiiikawa" target="곽정원">
        <img id="contactus_img" src={contactus01} alt="곽정원" />
      </a>

      <a href="https://github.com/Chiiikawa" target="강상찬">
        <img id="contactus_img" src={contactus02} alt="강상찬" />
      </a>

      <a href="https://github.com/Chiiikawa" target="양덕영">
        <img src={contactus03} alt="양덕영" />
      </a>
    </div>

    <div className='contactus_set02'>
      <a href="https://github.com/Chiiikawa" target="김지수">
        <img src={contactus04} alt="김지수" />
      </a>

      <a href="https://github.com/Chiiikawa" target="신선화">
        <img src={contactus05} alt="신선화" />
      </a>
      
    </div>
  </div>
</div>
  );
}

export default ContactUs;
