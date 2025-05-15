import { FaUserFriends, FaChartBar, FaBell, FaCog } from "react-icons/fa";

const DashHome = () => {
  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">لوحة التحكم</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-2xl p-5 flex items-center gap-4">
          <FaUserFriends className="text-blue-500 text-3xl" />
          <div>
            <p className="text-gray-600 text-sm">المستخدمين</p>
            <p className="text-xl font-bold">120</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl p-5 flex items-center gap-4">
          <FaChartBar className="text-green-500 text-3xl" />
          <div>
            <p className="text-gray-600 text-sm">الإحصائيات</p>
            <p className="text-xl font-bold">85%</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl p-5 flex items-center gap-4">
          <FaBell className="text-yellow-500 text-3xl" />
          <div>
            <p className="text-gray-600 text-sm">الإشعارات</p>
            <p className="text-xl font-bold">14 جديدة</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl p-5 flex items-center gap-4">
          <FaCog className="text-purple-500 text-3xl" />
          <div>
            <p className="text-gray-600 text-sm">الإعدادات</p>
            <p className="text-xl font-bold">جاهز</p>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          مرحباً بك 👋
        </h2>
        <p className="text-gray-600">
          يمكنك البدء بإدارة محتوى موقعك من خلال القائمة الجانبية أو الروابط
          أعلاه.
        </p>
      </div>
    </div>
  );
};

export default DashHome;
