import styles from './ModalBasic.module.css';

function Signin({ setModalOpen }: PropsType) {

    // 모달 끄기
    const closeModal = () => {
        setModalOpen(false);
    };
    const goToSignUp = () => {
      window.open('../Pages/Signup.jsx', '_blank')
    }

    return (
      <div className={styles.modalbox}>
        <div className={styles.modal}>
            <div className="Title">Sign-In Modal</div>
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
