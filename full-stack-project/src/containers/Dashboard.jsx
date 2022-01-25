import { useState, useEffect } from "react";
import "./Dashboard.scss";
import Nav from "../components/Nav/Nav";
import CourseList from "../components/CourseList/CourseList";
import Form from "../components/Form/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Dashboard = () => {
  const [course, setCourse] = useState([]);

  const url = "http://localhost:8080/courses" 

  const getCourse = () => {
    fetch(url)
    .then(res => res.json())
    .then(json => setCourse(json))
    .catch(err => console.log(err))
  }

  useEffect(() => {

    getCourse();
  }, [course]);

  return (
    <Router>
  
    <Nav />
    <Routes>
    <Route path ="/" element={<CourseList />} /> 

    <Route path ="/courses" element={<CourseList />} /> 

    <Route path ="/add-course" element={<Form />} /> 
    
    </Routes>
    </Router>
  )
}

export default Dashboard
