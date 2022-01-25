import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <div className="nav">
    <h1>NavBar Here</h1>
      
      <ul>
        <Link className="nav-items" to="/">Home</Link>
        <Link className="nav-items" to="/courses">Courses</Link>
        <Link className="nav-items" to="/add-course" >Add Course</Link>
      </ul>

    
    </div>
  )
}
export default Nav 