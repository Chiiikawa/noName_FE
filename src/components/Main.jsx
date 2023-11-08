// 메인 페이지!!!!!!
import React from 'react';
import '../App.css';

function Main() {

  let data = "*PROJ. NO NAME*";

  return(
    <div className="Mainpg">
      <h1 style={ { color: 'black' } }>{ data }</h1>
      <ul id="search_engine">
        <div className="searchbar">
          <h1>here's our search bar</h1>
        </div>
        <div className="create button">
        <a href = "/result">Create!</a>
        </div>
      </ul>

    </div>
  );
}

export default Main;
