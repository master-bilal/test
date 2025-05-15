import { NavLink, useNavigate } from "react-router-dom";
import {
  RectangleGroupIcon,
  UserCircleIcon,
  ChatBubbleLeftIcon,
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
  PencilIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import Cookies from "js-cookie";
import { UserContext } from "../context/UserContext";

const SideBar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(UserContext);

  const links = [
    {
      name: "الرئيسية",
      path: "/teacher-dashboard/DashHome",
      icon: <ChartBarIcon className="w-5 h-5" />,
    },
    {
      name: "الجدول",
      path: "/teacher-dashboard/AvailabilityTeacher",
      icon: <DocumentTextIcon className="w-5 h-5" />,
    },
    {
      name: "الدورات",
      path: "/teacher-dashboard/TeacherCourses",
      icon: <RectangleGroupIcon className="h-6 w-6" />,
    },
    {
      name: "المستخدمين",
      path: "/teacher-dashboard/DashUsers",
      icon: <UserCircleIcon className="w-5 h-5" />,
    },
    {
      name: "المنشورات",
      path: "/postform",
      icon: <PencilIcon className="w-5 h-5" />,
    },
    {
      name: "التواصل",
      path: "/conatactdash",
      icon: <ChatBubbleLeftIcon className="w-5 h-5" />,
    },
  ];

  const handleLogout = () => {
    Cookies.remove("token");
    logout();
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-b from-emerald-800 to-emerald-950 text-white w-64 min-h-screen flex flex-col p-4 shadow-lg fixed top-0 left-0 z-50">
      <div className="flex items-center mb-10">
        <div className="text-3xl font-bold tracking-tighter cursor-pointer hover:scale-105 hover:text-emerald-200 transition-transform duration-300">
          <span className="font-extrabold">Ayatune</span>
        </div>
      </div>

      <ul className="flex-1 space-y-3">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `flex flex-row items-center gap-2 p-2 rounded-md transition-all duration-200 hover:bg-emerald-700 ${
                  isActive ? "bg-emerald-600 shadow-md" : ""
                }`
              }
            >
              <div className="text-emerald-300">{link.icon}</div>
              <span>{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        onClick={handleLogout}
        className="mt-auto flex justify-center items-center gap-2 p-3 rounded-md bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 shadow-md"
      >
        <ArrowRightOnRectangleIcon className="w-5 h-5" />
        <span>تسجيل الخروج</span>
      </button>
    </div>
  );
};

export default SideBar;
