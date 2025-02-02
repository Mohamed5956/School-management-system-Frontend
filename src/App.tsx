import { Suspense } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { CircleSpinner, WaveSpinner } from "react-spinners-kit";
import SignIn from "./pages/SignIn";
import LoggedInGuard from "./guards/LoggedInRoutes";
import StudentGuard from "./guards/StudentGuard";
import TeacherGuard from "./guards/TeacherGuard";
import HomeS from "./pages/student-pages/HomeS";
import HomeT from "./pages/teacher-pages/HomeT";
import AdminGuard from "./guards/AdminGuard";
import HomeA from "./pages/admin-pages/HomeA";
import NavbarA from "./pages/admin-pages/components/NavbarA";
import CoursesA from "./pages/admin-pages/CoursesA";
import CreateCourse from "./pages/admin-pages/CreateCourse";
import ModifyCourse from "./pages/admin-pages/ModifyCourse";
import NavbarS from "./pages/student-pages/components/NavbarS";
import CoursesS from "./pages/student-pages/CoursesS";
import Course from "./pages/student-pages/Course";
import MyCoursesS from "./pages/student-pages/MyCoursesS";
import NavbarT from "./pages/teacher-pages/components/NavbarT";
import MyCoursesT from "./pages/teacher-pages/MyCoursesT";
import CoursesT from "./pages/teacher-pages/CoursesT";
import CreateExamForm from "./pages/teacher-pages/CreateExamForm ";
import AdminDashboard from "./pages/admin-pages/AdminDashboard";
import StudentDashboard from "./pages/student-pages/StudentDashboard ";
import CourseT from "./pages/teacher-pages/CourseT";
import Footer from "./components/Footer";
import ExamPage from "./pages/student-pages/ExamPage";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Navigate to="/signin" />}></Route>
        <Route element={<LoggedInGuard />}>
          <Route
            path="/signin"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <SignIn />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <WaveSpinner size={60} />
                  </div>
                }
              >
                <SignUp />
              </Suspense>
            }
          />
        </Route>
        <Route element={<StudentGuard />}>
          <Route
            path="/s/"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <NavbarS />
                <HomeS />
                <Footer/>
              </Suspense>
            }
          />
          <Route
            path="/s/courses"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <NavbarS />
                <CoursesS />
                <Footer/>
              </Suspense>
            }
          />
          <Route
            path="/s/my-courses"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <NavbarS />
                <MyCoursesS />
                <Footer/>
              </Suspense>
            }
          />
          <Route
            path="/s/courses/:id"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <NavbarS />
                <Course />
                <Footer/>
              </Suspense>
            }
          />
          <Route
            path="/s/examination"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <NavbarS />
                <StudentDashboard />
              </Suspense>
            }
          />
          <Route
            path="/s/exam/:examId"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                {/* <NavbarS /> */}
                <ExamPage />
              </Suspense>
            }
          />
        </Route>
        <Route element={<TeacherGuard />}>
          <Route
            path="/t/"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <NavbarT />
                <HomeT />
                <Footer/>
              </Suspense>
            }
          />
          <Route
            path="/t/my-courses"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <NavbarT />
                <MyCoursesT />
                <Footer/>
              </Suspense>
            }
          />
          <Route
            path="/t/courses"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <NavbarT />
                <CoursesT />
                <Footer/>
              </Suspense>
            }
          />
          <Route
            path="/t/my-courses/:id"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <NavbarT />
                <CourseT />
                <Footer/>
              </Suspense>
            }
          />
          <Route
            path="/t/createExam"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <NavbarT />
                <CreateExamForm />
              </Suspense>
            }
          />
        </Route>
        <Route element={<AdminGuard />}>
          <Route
            path="/a/"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <NavbarA />
                <HomeA />
              </Suspense>
            }
          />
          <Route
            path="/a/courses"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <NavbarA />
                <CoursesA />
              </Suspense>
            }
          />
          <Route
            path="/a/courses/new-course"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <CreateCourse />
              </Suspense>
            }
          />
          <Route
            path="/a/courses/:id"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <ModifyCourse />
              </Suspense>
            }
          />
           <Route
            path="/a/AdminDashboard"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <NavbarA />
                <AdminDashboard />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
