import React from "react";
import "./Loading.css";
import Spinner from "../Assets/loading.gif";

export const Loading = () => {
  return (
    <div className="loadingBox">
      <div className="lodaingText">Loading...</div>
      <img src={Spinner} alt="로딩중" width="5%" />
    </div>
  );
};

export default Loading;
