import React from 'react'
import Styles from '@/styles/Courses.module.css'
import AddModal from './AddModal';
import { useState } from 'react';

function Courses() {
 const [showAddCourseModal, setShowAddCourseModal] = useState(false);
 const handelHideModal = () => setShowAddCourseModal(false);
  return (
    <>
      <section className={Styles.courses}>
        <div className={Styles.courses_top}>
          <h2 className={Styles.courses_title}>Courses</h2>
          <button
            className={Styles.courses_btn}
            onClick={() =>setShowAddCourseModal(true)}
          >
            Add Course
          </button>
        </div>
        <ul className={Styles.courses_list}></ul>
      </section>
      {
        showAddCourseModal && <AddModal hideAddCourseModal={handelHideModal}/>
      }
    </>
  );
}

export default Courses