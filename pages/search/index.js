import React from "react";
import Search from "@/components/templates/Search/Search";
import connectToDB from "@/utils/db";
import courseMoled from "@/models/course";
function index({ courses }) {
  return <Search courses={courses} />;
}

export default index;

export async function getServerSideProps(context) {
  const searchValue = context.query?.q;

  connectToDB();
  const courses = await courseMoled.find({ title: { $regex: searchValue } });

  console.log(courses);
  return {
    props: { courses: JSON.parse(JSON.stringify(courses)) },
  };
}
