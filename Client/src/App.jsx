import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { NavbarSpacer } from "./component/Navbar";import Footer from "./component/Footer"
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
import UploadVideo from "./pages/UploadVideo";
import SideBar from "./teacher-dashboard/SideBar";
import DashHome from "./teacher-dashboard/DashHome";
import DashUsers from "./teacher-dashboard/DashUsers";
import CourseCard from "./pages/CourseCard";
import CoursesPage from "./pages/CoursesPage";
import AboutUs from "./pages/About";
import CreateCourse from "./teacher-dashboard/CreateCoursePage";
import TeacherCourses from "./teacher-dashboard/TeacherCourses";
function App() {
    const location = useLocation();
    
  return (
    <>
      {[
        "/",
        "/aboutus",
        "/contactus",
        "/courses",
        "/profile",
        "/",
        "/",
        "/",
      ].includes(location.pathname) && <Navbar />}
      <NavbarSpacer />

      {[
        "/dashboard",
        "/teacher-dashboard/DashHome",
        "/teacher-dashboard/DashUsers",
        "/teacher-dashboard/CreateCoursePage",
        "/teacher-dashboard/TeacherCourses",
        "/",
      ].includes(location.pathname) && <SideBar />}

      {/* <Router> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/upload" element={<UploadVideo />} />
        <Route path="/teacher-dashboard/DashHome" element={<DashHome />} />
        <Route path="/teacher-dashboard/DashUsers" element={<DashUsers />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/coursecard" element={<CourseCard />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/teacher-dashboard/CreateCoursePage"
          element={<CreateCourse />}
        />
        <Route
          path="/teacher-dashboard/TeacherCourses"
          element={<TeacherCourses />}
        />
      </Routes>
      {/* </Router> */}

      {[
        "/",
        "/aboutus",
        "/contactus",
        "/coursepage",
        "/profile",
        "/",
        "/",
        "/",
      ].includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
