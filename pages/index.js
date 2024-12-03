import React from "react";
import Courses from "@/components/templates/Index/Courses";
import connectToDB from "@/utils/db";
import courseModel from "@/models/course";

function index({courses}) {
  return <Courses data={courses}/>;
}

export default index;

export async function getStaticProps() {
  connectToDB();
  const courses = await courseModel.find({});
  
  console.log(courses);
  return {
    props: { courses:JSON.parse(JSON.stringify(courses)) },
    revalidate: 60 * 60 * 12,
  };
}
