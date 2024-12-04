import React from 'react'
import CourseItem from '@/components/modules/CourseItem/CourseItem';
import styles from "@/styles/Courses.module.css";

function Search({courses}) {
 return (
   <>
     <section className={styles.courses}>
       <div className={styles.courses_top}>
         <h2 className={styles.courses_title}>Search Result</h2>
        
       </div>
       <ul className={styles.courses_list}>
         {courses.map((course) => (
           <li key={course._id}>
             <CourseItem course={course} />
           </li>
         ))}
       </ul>
     </section>
    
   </>
 );
}

export default Search;

