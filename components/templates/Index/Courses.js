import React from "react";
import Styles from "@/styles/Courses.module.css";
import AddCourseModal from "./AddModal";
import { useState } from "react";
import CourseItem from "@/components/modules/CourseItem/CourseItem";

function Courses({ data }) {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const handelHideModal = () => setShowAddCourseModal(false);
  return (
    <>
      <section className={Styles.courses}>
        <div className={Styles.courses_top}>
          <h2 className={Styles.courses_title}>Courses</h2>
          <button
            className={Styles.courses_btn}
            onClick={() => setShowAddCourseModal(true)}
          >
            Add Course
          </button>
        </div>
        <ul className={Styles.courses_list}>
          {data.map((course) => (
            <li key={course._id}>
              <CourseItem course={course} />
            </li>
          ))}
        </ul>
      </section>
      {showAddCourseModal && (
        <AddCourseModal hideAddCourseModal={handelHideModal} />
      )}
    </>
  );
}

export default Courses;
