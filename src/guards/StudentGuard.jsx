import { Navigate, Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";

const StudentGuard = () => {
  const isStudent = () => {
    const token = localStorage.getItem("token");
    const student = jwtDecode(token);
    return student.role === 'student'
  };
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    return token;
  };
  return (
    isLoggedIn() && isStudent() ?
    <Outlet/> 
    :
    isLoggedIn() && !isStudent() ?
    <Navigate to='/t/'/>
    :
    <Navigate to='/signin'/> // Not loggedIn case
  )
};

export default StudentGuard;
