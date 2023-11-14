import React from 'react';
import '../App.css';



const handlePosting = (e) => {
  e.preventDefault();
  alert('Postin Postin!');
}


function Result() {

  return(
    <div>
      <h1>PROJ. NO NAME </h1>
      <h1>결과</h1>
      <br></br>

      <h2>멈춰1!!!!!!!! 이렇게 하는거 아님!!!!!!!!!</h2>


냅둬
냅둬
냅둬1!!!
지우지망요아아앙ㅇ

      <h1>!!!!!!!for 문 사용해서 만들어야함!!!!!!!!</h1>
      <a href="https://velog.io/@hyounglee/TIL-55">링크 참고</a>
      <br></br>
      <sec>
        <div className="results">
        </div>
        <div className="button">
          <button type="submit" className="posting_bttn" onClick={handlePosting}>Posting!</button>
        </div>
      </sec>
    </div>
  );
}

export default Result;
