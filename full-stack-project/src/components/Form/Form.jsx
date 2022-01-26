import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [course, setCourse] = useState({
    name: "",
    location: "",
    price: "",
    duration: "",
    summary: "",
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <div className="form">
      
        <h2>Add New Course</h2>
        <form className="formContainer" onSubmit={handleSubmit}>
          <input
            className="inputField"
            type="text"
            placeholder="Name Of Course"
            required
            onInput={(e) => setCourse({ ...course, name: e.target.value })}
          ></input>
          <input
            className="inputField"
            type="text"
            required
            placeholder="Location Of Course"
            onInput={(e) => setCourse({ ...course, location: e.target.value })}
          ></input>
          <input
            className="inputField"
            type="text"
            required
            placeholder="Price"
            onInput={(e) => setCourse({ ...course, price: e.target.value })}
          ></input>
          <input
            className="inputField"
            type="text"
            required
            placeholder="Duration"
            onInput={(e) => setCourse({ ...course, duration: e.target.value })}
          ></input>
          <input
            className="inputField"
            type="text"
            required
            placeholder="summary"
            onInput={(e) => setCourse({ ...course, summary: e.target.value })}
          ></input>
           <button type="submit" className="btn">Submit</button>
        </form>
      
    </div>
  );
};
export default Form;
