import React from "react";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faFile,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import swal from "sweetalert";

function AddCourseModal({ hideAddCourseModal }) {
  const [couseInformation, setCourseInformation] = useState({
    title: "",
    price: "",
    teacher: "",
    image: {
      name: "",
      data: null,
      contentType: "",
    },
  });
  const handelInputs = ({ target: { name, value, files } }) => {
    if (name === "image" && files) {
      const file = files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setCourseInformation((prev) => ({
          ...prev,
          [name]: {
            name: file.name,
            data: reader.result, //File content (binary data as base64 string)
            contentType: file.type,
          },
        }));
      };
    } else {
      setCourseInformation((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  console.log(couseInformation);

  const handelSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(couseInformation),
      });
      if (!res.ok) {
        throw new Error("something went wrong");
      }
      const data = await res.json();
      setCourseInformation({
        title: "",
        price: "",
        teacher: "",
        image: {
          name: "",
          data: null,
          contentType: "",
        },
      });
      hideAddCourseModal();

      swal({
        title: "Add Course",
        icon: "success",
        text: "Course Added Successfully",
        customClass: {
          confirmButton: 'swal2-confirm-custom-class',
        }
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_close} onClick={hideAddCourseModal}></div>
      <div className={styles.modal_content}>
        <h1 className={styles.modal_title}>Add New Course</h1>
        <form onSubmit={handelSubmitForm}>
          <div className={styles.modal_input}>
            <span>
              <FontAwesomeIcon icon={faTag} className={styles.tag} />
            </span>
            <input
              value={couseInformation.title}
              type="text"
              placeholder="Title"
              name="title"
              onChange={handelInputs}
            />
          </div>
          <div className={styles.modal_input}>
            <span>
              <FontAwesomeIcon icon={faCashRegister} className={styles.tag} />
            </span>
            <input
              value={couseInformation.price}
              type="number"
              placeholder="price"
              name="price"
              onChange={handelInputs}
            />
          </div>
          <div className={styles.modal_input}>
            <span>
              <FontAwesomeIcon icon={faUser} className={styles.tag} />
            </span>
            <input
              value={couseInformation.teacher}
              type="text"
              placeholder="Teacher"
              name="teacher"
              onChange={handelInputs}
            />
          </div>
          <div className={styles.modal_input}>
            <span>
              <FontAwesomeIcon icon={faFile} className={styles.tag} />
            </span>
            <input type="file" name="image" onChange={handelInputs} />
          </div>
          <button className={styles.modal_btn}>Add Course</button>
        </form>
      </div>
    </div>
  );
}

export default AddCourseModal;
