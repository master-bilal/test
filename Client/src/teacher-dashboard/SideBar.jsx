import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  RectangleGroupIcon,
  UserCircleIcon,
  ChatBubbleLeftIcon,
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
  PencilIcon,
  DocumentTextIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tears, setTears] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const createTear = () => {
      const newTear = {
        id: Math.random(),
        left: Math.random() * 100,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 2,
        size: 5 + Math.random() * 10,
      };

      setTears((prev) => [...prev, newTear]);

      setTimeout(() => {
        setTears((prev) => prev.filter((tear) => tear.id !== newTear.id));
      }, (newTear.duration + newTear.delay) * 1000);
    };

    for (let i = 0; i < 5; i++) {
      createTear();
    }

    const tearInterval = setInterval(createTear, 2000);
    return () => clearInterval(tearInterval);
  }, []);

  const links = [
    {
      name: "Home",
      path: "/teacher-dashboard/DashHome",
      icon: <ChartBarIcon className="w-5 h-5" />,
    },
    {
      name: "Subscription Card Form",
      path: "/subformDash",
      icon: <DocumentTextIcon className="w-5 h-5" />,
    },
    {
      name: "Teacher Courses",
      path: "/teacher-dashboard/TeacherCourses",
      icon: <RectangleGroupIcon className="h-6 w-6" />,
    },
    {
      name: "Users",
      path: "/teacher-dashboard/DashUsers",
      icon: <UserCircleIcon className="w-5 h-5" />,
    },
    {
      name: "Posts",
      path: "/postform",
      icon: <PencilIcon className="w-5 h-5" />,
    },
    {
      name: "Contact",
      path: "/conatactdash",
      icon: <ChatBubbleLeftIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex">
      {/* Menu toggle button for mobile */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 bg-emerald-800 text-white p-3 rounded-md lg:hidden"
        >
          ☰
        </button>
      )}

      {/* Sidebar Icon (visible when sidebar is hidden) */}
      {!isHovered && (
        <div
          className="hidden lg:flex fixed left-0 top-4 z-40 bg-emerald-800 text-white p-3 rounded-r-md cursor-pointer hover:bg-emerald-700 transition-all"
          onMouseEnter={() => setIsHovered(true)}
        >
          <Bars3Icon className="w-5 h-5" />
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-emerald-800 to-emerald-950 text-white w-64 min-h-screen flex flex-col p-4 shadow-lg fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out relative overflow-hidden
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:fixed lg:left-0 lg:z-40`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? "translateX(0)" : "translateX(-90%)",
          opacity: isHovered ? 1 : 0,
          transition: "all 0.3s ease-in-out",
          pointerEvents: isHovered ? "auto" : "none",
        }}
      >
        {/* Animated teardrops */}
        {tears.map((tear) => (
          <div
            key={tear.id}
            className="absolute bg-emerald-300 opacity-40 rounded-b-full"
            style={{
              left: `${tear.left}%`,
              top: 0,
              width: `${tear.size}px`,
              height: `${tear.size * 1.5}px`,
              animation: `teardrop ${tear.duration}s ease-in ${tear.delay}s forwards`,
            }}
          />
        ))}

        {/* Close button (mobile only) */}
        <button
          onClick={toggleSidebar}
          className="mb-4 hover:cursor-pointer hover:text-emerald-200 self-start text-4xl lg:hidden"
        >
          ✕
        </button>

        {/* Site title */}
        <div className="flex items-center">
          <div className="text-3xl font-bold tracking-tighter transition-transform duration-300 hover:scale-105 hover:text-emerald-200 cursor-pointer">
            <span className="font-extrabold">Ayatune</span>
            {/* <span className="font-light">GAZETTE</span> */}
          </div>
        </div>

        {/* Navigation links */}
        <ul className="flex-1 mt-10 space-y-3">
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

        {/* Logout button */}
        <NavLink
          to="/"
          className="mt-auto flex justify-center items-center gap-2 p-3 rounded-md bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 shadow-md"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          <span>Logout</span>
        </NavLink>
      </div>

      {/* CSS for teardrop animation */}
      {/* <style jsx>{`
        @keyframes teardrop {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(2000%);
            opacity: 0;
          }
        }
      `}</style> */}
    </div>
  );
};

export default SideBar;
