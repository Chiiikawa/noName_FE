import styles from './ModalBasic.module.css';

function ModalAccManager({ setModalOpen, id, title, content, writer }: PropsType) {
    // 모달 끄기
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
      <div className={styles.modalbox}>
        <div className={styles.modal}>
            <button className={styles.close} onClick={closeModal}>
                X
            </button>
            <p>@username</p>
            <label>Email: </label>
            <input type="Email" />
            <br/>
            <label>Password</label>
            <input type="Password" />
        </div>
      </div>
    );
}
export default ModalAccManager;
