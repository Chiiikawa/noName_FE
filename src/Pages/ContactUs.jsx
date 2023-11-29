import '../App.css';
import contactus01 from './Assets/Contactus01.png';
import contactus02 from './Assets/Contactus02.png';
import contactus03 from './Assets/Contactus03.png';
import contactus04 from './Assets/Contactus04.png';
import contactus05 from './Assets/Contactus05.png';


function ContactUs() {
  return (
<div>
<div class='bg_img01'>
<div class='container'>
<div className='bg001'>
<div className='box01'>
        <h2><a href="https://github.com/Chiiikawa" target="_blank" rel="noreferrer">NO:NAME<br></br>PROJEC</a></h2>
</div>
<div className='box02'>
        <h2><a href="https://github.com/Chiiikawa" target="_blank" rel="noreferrer">노_션_S.A</a></h2>
        <h2><a href="https://github.com/Chiiikawa/noName_FE" target="_blank" rel="noreferrer">깃_허브_FE</a></h2>
        <h2><a href="https://github.com/Chiiikawa/noName_BE" target="_blank" rel="noreferrer">깃_허브_BE</a></h2>
</div>
</div>      
      <div className='bg002'>
        <a href="https://github.com/Chiiikawa" target="_blank" rel="noreferrer">
        <img src={contactus01} alt="곽정원 프로필" />
        </a>

        <a href="https://github.com/Chiiikawa" target="_blank" rel="noreferrer">
        <img src={contactus02} alt="강상찬 프로필" />
        </a>

        <a href="https://github.com/Chiiikawa" target="_blank" rel="noreferrer">
        <img src={contactus03} alt="양덕영 프로필" />
        </a>
      </div>

      <div className='bg003'>
        <a href="https://github.com/Chiiikawa" target="_blank" rel="noreferrer">
        <img src={contactus04} alt="김지수 프로필" />
        </a>

        <a href="https://github.com/Chiiikawa" target="_blank" rel="noreferrer">
        <img src={contactus05} alt="신선화 프로필" />
        </a>
      </div>
</div>    

<div class='bg_img02'>


</div>

</div>
</div>


  );
}

export default ContactUs;
