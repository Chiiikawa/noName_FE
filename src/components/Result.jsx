import React from 'react';
import '../App.css';



const handlePosting = (e) => {
  e.preventDefault();
  alert('Postin Postin!');
}


function Result() {

  return(
    <div>
      <h1>결과</h1>
      <br></br>

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
