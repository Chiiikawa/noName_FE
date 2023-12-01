import { useEffect, useRef } from 'react';
import styles from './ModalBasic.module.css';

function Signin({ setModalOpen }: PropsType) {

    // 모달 끄기
    const closeModal = () => {
        setModalOpen(false);
    };
    const goToSignUp = () => {
      window.open('../Pages/Signup.jsx', '_blank')
    }

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = () => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalOpen(false);
            }
        };

        // 이벤트 핸들러 등록
        document.addEventListener('mousedown', handler);
        // document.addEventListener('touchstart', handler); // 모바일 대응

        return () => {
            // 이벤트 핸들러 해제
            document.removeEventListener('mousedown', handler);
            // document.removeEventListener('touchstart', handler); // 모바일 대응
        };
    });

    return (
      <div className={styles.modalbox}>
        <div ref={modalRef} className={styles.modal}>
            <div className={styles.Title}>Sign-In Modal</div>
            <button className={styles.close} onClick={closeModal}>
                X
            </button>
            <div className="formbox">
              <label>*Email</label>
              <input type="email"/>
            </div>
            <div className="formbox">
              <label>*password</label>
              <input type="Password"/>
            </div>
            <div className="btn">
              <button>SignIn</button>
              <h3>핸들 사인인 통해서 isAuth 부탁</h3>
            </div>
            <div className="formbox">
              <h3>아이디가 없으십니까?</h3>
              <button className="signupBtn" onClick={goToSignUp}>SignUp</button>
            </div>
        </div>
      </div>
    );
}
export default Signin;
