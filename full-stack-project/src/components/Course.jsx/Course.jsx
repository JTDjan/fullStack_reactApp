import React from "react";
import "./Course.scss";

const Course = (props) => {
  const { name, location, price, duration, summary } = props.course;

  return (
    <div className="course">
      <h3>Course: {name} </h3>
      <h4>location: {location}</h4>
      <h5>Price: {price}</h5>
      <h6>Duration: {duration}</h6>
      <p>Summary: {summary}</p>
    </div>
  );
};
export default Course;
