import React, { useState, useEffect } from "react";
import TypingTitle from "../Typing.jsx";
import SignIn from "../Modals/signInModal.jsx";
import Loading from "../Components/Loading.jsx";

// Loading 추가한 뒤에, 자꾸 신택스에러 뜸ㅠㅠㅠㅠㅠ
// Create 버튼 누르면 로딩창 띄우도록 설정해주세s

function Main() {
  const [loading, setLoading] = useState(true);

  const mainApi = async () => {
    setLoading(true); // api 호출 전에 true로 변경하여 로딩화면 띄우기
    try {
      const response = await fetch(`api url`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const result = await response.json();
      console.log("mainData", result);
      setLoading(false); // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
    } catch (error) {
      window.alert(error);
    }
  };

  useEffect(() => {
    mainApi();
  }, []);

  function Hi() {
    alert("Hi");
  }
  return (
    <div>
      <button onClick={Hi}>Hi</button>
      <button>Create</button>
      <SignIn />
      <h1>Hi I'm Joshua</h1>
      <TypingTitle />
      {loading ? <Loading /> : null}
    </div>
  );
}

export default Main;
