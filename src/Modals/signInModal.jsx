import { useState } from "react";
import Signin from "./signInModalBase.jsx";

// 모달을 노출하는 페이지
function SignIn() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={showModal}>모달 띄우기</button>
      {modalOpen && <Signin setModalOpen={setModalOpen} />}
    </div>
  );
}

export default SignIn;
