import React from "react";
import Courses from "@/components/templates/Index/Courses";
import connectToDB from "@/utils/db";
import courseModel from "@/models/course";

function index() {
  return <Courses />;
}

export default index;

export async function getStaticProps(){
 connectToDB();
  const courses=await courseModel.find({});
  console.log(courses);
return {
  props:{}, 
}

} 
