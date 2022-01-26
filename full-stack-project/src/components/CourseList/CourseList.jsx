import React from "react";
import Course from "../Course.jsx/Course";
import "./CourseList.scss";

const CourseList = (props) => {
  return (
    <>
      <div className="container">
        {props.course &&
          props.course.map((course) => (
            <Course key={course.id} course={course} />
          ))}
      </div>
    </>
  );
};
export default CourseList;
