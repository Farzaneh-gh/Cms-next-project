import React from "react";
import styles from "@/styles/Modal.module.css";

function DeleteModal({ hideDeleteModal, deleteCourse }) {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_bg}></div>
      <div className={styles.modal_content}>
        <h3 className={styles.modal_delete_title}>
          Are you sure you want to delete this course?
        </h3>
        <div className={styles.modal_delete_btns}>
          <button onClick={hideDeleteModal}>Cancel</button>
          <button onClick={deleteCourse} className={styles.modal_delete_btn}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
