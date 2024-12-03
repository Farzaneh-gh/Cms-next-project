/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./CourseItem.module.css"
import { useState } from "react";
import EditModal from '@/components/templates/Index/EditModal';
import DeleteModal from '@/components/templates/Index/DeleteModal';
import swal from 'sweetalert';



function CourseItem({ course }) {
 const [showEditModal, setShowEditModal] = useState(false);
 const [showDeleteModal, setShowDeleteModal] = useState(false);
 const handelHideDeleteModal = () => setShowDeleteModal(false);
 const handelHideEditModal = () => setShowEditModal(false);
 const handelDeleteCourse=async()=>{
try{
    const response=await fetch(`/api/courses/${course._id}`,{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({id:course._id}),
        });
        if(!response.ok){
            throw new Error("something went wrong"); 
        }
        handelHideDeleteModal();
        swal({
            title: "Delete Course",
            icon: "success",
            text: "Course Deleted Successfully",    
            button: "OK",
        })
    }catch(error){
    console.log("error deleting course =>",error.message);
    } 
}
 
  return (
    <div className={styles.course_item_container}>
      <div className={styles.course_img_title}>
        <img
          src={'/images/courses/js.png'}
          alt={course.image?.name || "Course image"}
          className={styles.course_img}
        />
        <h5 className={styles.course_title}>{course.title}</h5>
      </div>
      <div className={styles.course_btns}>
        <button className={styles.edit_btn}>Edit</button>
        <button className={styles.delete_btn} onClick={() => setShowDeleteModal(true)}>Delete</button>
      </div>
      {showEditModal && <EditModal />}
      {showDeleteModal && <DeleteModal hideDeleteModal={handelHideDeleteModal} deleteCourse={handelDeleteCourse} />}
    </div>
  );
}

export default CourseItem