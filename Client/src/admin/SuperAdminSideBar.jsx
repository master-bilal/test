// src/super-admin-dashboard/SuperAdminSideBar.jsx
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  ArrowRightOnRectangleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import Cookies from "js-cookie";
import { UserContext } from "../context/UserContext";

const SuperAdminSideBar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(UserContext);

  const links = [
    {
      name: "لوحة التحكم",
      path: "/superadmin/dashboard",
      icon: <HomeIcon className="w-5 h-5" />,
    },
    {
      name: "إدارة المعلمين",
      path: "/superadmin/teachers",
      icon: <UserGroupIcon className="w-5 h-5" />,
    },
    {
      name: "إدارة الطلاب",
      path: "/superadmin/students",
      icon: <UserGroupIcon className="w-5 h-5" />,
    },
    {
      name: "الاختبارات",
      path: "/superadmin/quiz",
      icon: <ExclamationCircleIcon className="w-5 h-5" />,
    },
  ];

  const handleLogout = () => {
    Cookies.remove("token");
    logout();
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-b from-indigo-800 to-indigo-950 text-white w-64 min-h-screen flex flex-col p-4 shadow-lg fixed top-0 left-0 z-50">
      <div className="text-3xl font-bold mb-10 tracking-tight hover:scale-105 transition-all">
        لوحة الإدارة
      </div>

      <ul className="flex-1 space-y-3">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md hover:bg-indigo-700 transition-all ${
                  isActive ? "bg-indigo-600 shadow-md" : ""
                }`
              }
            >
              <div className="text-indigo-300">{link.icon}</div>
              <span>{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        onClick={handleLogout}
        className="mt-auto flex items-center justify-center gap-2 p-3 rounded-md bg-indigo-600 hover:bg-indigo-500 transition-all shadow-md"
      >
        <ArrowRightOnRectangleIcon className="w-5 h-5" />
        <span>تسجيل الخروج</span>
      </button>
    </div>
  );
};

export default SuperAdminSideBar;
