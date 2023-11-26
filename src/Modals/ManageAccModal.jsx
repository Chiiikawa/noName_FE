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
            <p>ManageAccModal</p>
        </div>
      </div>
    );
}
export default ModalAccManager;
