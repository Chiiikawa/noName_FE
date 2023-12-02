import styles from './ModalBasic.module.css';

function ModalBasic({ setModalOpen, id, title, content, writer }: PropsType) {
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
            <p>모달창입니다.</p>
        </div>
      </div>
    );
}
export default ModalBasic;
