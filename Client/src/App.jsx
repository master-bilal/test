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
import Navbar from "./layout/Navbar";
// import { NavbarSpacer } from "./layout/Navbar";
import Footer from "./layout/Footer";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
import SideBar from "./teacher-dashboard/SideBar";
import DashHome from "./teacher-dashboard/DashHome";
import DashUsers from "./teacher-dashboard/DashUsers";
import AboutUs from "./pages/About";
import CreateCourse from "./teacher-dashboard/CreateCoursePage";
import TeacherCourses from "./teacher-dashboard/TeacherCourses";
import AddVideo from "./teacher-dashboard/AddVideo";
import CourseVideos from "./teacher-dashboard/CourseVideos";
import ShopCourses from "./pages/ShopCourses";
import CourseDetails from "./pages/CourseDetails";
import MyCourses from "./pages/MyCourses.";
import MyCourseDetails from "./pages/MyCourseDetails";
import AvailabilityTeacher from "./teacher-dashboard/BookingDash";
import SuperAdminSideBar from "./admin/SuperAdminSideBar";
import Dashboard from "./admin/Dashboard";
import Teachers from "./admin/Teachers";
import Students from "./admin/Students";
import Quis from "./admin/Quis";
import Exams from "./pages/Exams";
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
        "/shop/courses",
        "/shop/courses/:id",
        "/mycourses",
        "/exams",
      ].includes(location.pathname) && <Navbar />}

      {[
        "/dashboard",
        "/teacher-dashboard/DashHome",
        "/teacher-dashboard/DashUsers",
        "/teacher-dashboard/CreateCoursePage",
        "/teacher-dashboard/TeacherCourses",
        "/teacher-dashboard/AvailabilityTeacher",
      ].includes(location.pathname) && <SideBar />}

      {[
        "/superadmin/dashboard",
        "/superadmin/teachers",
        "/superadmin/students",
        "/superadmin/quiz",
      ].includes(location.pathname) && <SuperAdminSideBar />}

      {/* <Navbar /> */}

      {/* <Router> */}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/mycourse/:courseId" element={<MyCourseDetails />} />

        <Route path="/teacher-dashboard/DashHome" element={<DashHome />} />
        <Route path="/teacher-dashboard/DashUsers" element={<DashUsers />} />
        <Route
          path="/teacher-dashboard/CreateCoursePage"
          element={<CreateCourse />}
        />
        <Route
          path="/teacher-dashboard/TeacherCourses"
          element={<TeacherCourses />}
        />
        <Route
          path="/teacher-dashboard/TeacherCourses/:courseId/add-video"
          element={<AddVideo />}
        />
        <Route
          path="/teacher-dashboard/AvailabilityTeacher"
          element={<AvailabilityTeacher />}
        />

        <Route
          path="/teacher-dashboard/TeacherCourses/:courseId/videos"
          element={<CourseVideos />}
        />
        <Route path="/shop/courses" element={<ShopCourses />} />
        <Route path="/shop/courses/:id" element={<CourseDetails />} />

        <Route path="/superadmin/dashboard" element={<Dashboard />} />
        <Route path="/superadmin/teachers" element={<Teachers />} />
        <Route path="/superadmin/students" element={<Students />} />
        <Route path="/superadmin/quiz" element={<Quis />} />
        <Route path="/exams" element={<Exams />} />
        
        
      </Routes>
      {/* </Router> */}

      {/*footer*/}
      {[
        "/",
        "/aboutus",
        "/contactus",
        "/coursepage",
        "/profile",
        "/shop/courses",
        "/shop/courses/:id",
        "/",
        "/exams",
      ].includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
