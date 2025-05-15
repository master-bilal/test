import { useState, useEffect } from "react";
import axios from "axios";
import {
  FiUsers,
  FiUser,
  FiUserCheck,
  FiUserX,
  FiUserPlus,
  FiSearch,
  FiEdit,
  FiTrash2,
  FiEye,
} from "react-icons/fi";
import { FaChalkboardTeacher, FaUserShield } from "react-icons/fa";

const DashUsers = () => {
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedUser, setSelectedUser] = useState({
    courses: [],
    Certificate: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const limit = 10;

  useEffect(() => {
    fetchStats();
    fetchUsers();
  }, [currentPage, searchTerm, roleFilter, statusFilter]);

  const fetchStats = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/users/stats"
      );
      setStats(response.data);
      console.log(response.data); // Check the structure here
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/users",
        {
          params: {
            page: currentPage,
            limit,
            search: searchTerm,
            role: roleFilter,
            status: statusFilter,
          },
        }
      );
      setUsers(response.data.users);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUserClick = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/admin/users/${userId}`
      );
      setSelectedUser(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const updateUserRole = async (userId, newRole) => {
    try {
      await axios.patch(`http://localhost:5000/api/admin/users/${userId}`, {
        role: newRole,
      });
      fetchUsers();
      fetchStats();
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  const toggleUserStatus = async (userId, currentStatus) => {
    try {
      await axios.patch(`http://localhost:5000/api/admin/users/${userId}`, {
        isdeleted: !currentStatus,
      });
      fetchUsers();
      fetchStats();
    } catch (error) {
      console.error("Error toggling user status:", error);
    }
  };

  const renderRoleBadge = (role) => {
    const roleClasses = {
      user: "bg-blue-100 text-blue-800",
      teacher: "bg-purple-100 text-purple-800",
      admin: "bg-red-100 text-red-800",
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold ${roleClasses[role]}`}
      >
        {role}
      </span>
    );
  };

  const renderStatusBadge = (isDeleted) => {
    return isDeleted ? (
      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
        Inactive
      </span>
    ) : (
      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
        Active
      </span>
    );
  };

  return (
    <div className="ml-64 px-8 py-8 w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        User Management Dashboard
      </h1>

      {/* Statistics Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6 flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <FiUsers size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Users</p>
              <p className="text-2xl font-bold">{stats.totalUsers}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <FiUser size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Regular Users</p>
              <p className="text-2xl font-bold">{stats.userCount}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
              <FaChalkboardTeacher size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Teachers</p>
              <p className="text-2xl font-bold">{stats.teacherCount}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
              <FaUserShield size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Admins</p>
              <p className="text-2xl font-bold">{stats.adminCount}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 flex items-center">
            <div className="p-3 rounded-full bg-gray-100 text-gray-600 mr-4">
              <FiUserX size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Inactive Users</p>
              <p className="text-2xl font-bold">{stats.inactiveCount}</p>
            </div>
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search by username or email"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={roleFilter}
              onChange={(e) => {
                setRoleFilter(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">All Roles</option>
              <option value="user">User</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>

            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        {loading ? (
          <div className="p-8 text-center">Loading users...</div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Joined
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {user.profilePicture ? (
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={user.profilePicture}
                              alt=""
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <FiUser className="text-gray-500" />
                            </div>
                          )}
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.username}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          className="bg-transparent border-none focus:ring-2 focus:ring-blue-500 rounded"
                          value={user.role}
                          onChange={(e) =>
                            updateUserRole(user._id, e.target.value)
                          }
                        >
                          <option value="user">User</option>
                          <option value="teacher">Teacher</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {renderStatusBadge(user.isdeleted)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleUserClick(user._id)}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          <FiEye size={18} />
                        </button>
                        <button
                          onClick={() =>
                            toggleUserStatus(user._id, user.isdeleted)
                          }
                          className={
                            user.isdeleted
                              ? "text-green-600 hover:text-green-900"
                              : "text-red-600 hover:text-red-900"
                          }
                        >
                          {user.isdeleted ? (
                            <FiUserCheck size={18} />
                          ) : (
                            <FiUserX size={18} />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing page {currentPage} of {totalPages}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-md ${
              currentPage === 1
                ? "bg-gray-100 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded-md ${
              currentPage === totalPages
                ? "bg-gray-100 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* User Details Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  User Details
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-shrink-0">
                  {selectedUser.profilePicture ? (
                    <img
                      className="h-32 w-32 rounded-full object-cover"
                      src={selectedUser.profilePicture}
                      alt="Profile"
                    />
                  ) : (
                    <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                      <FiUser className="text-gray-500 text-4xl" />
                    </div>
                  )}
                </div>

                <div className="flex-grow">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {selectedUser.username}
                      </h3>
                      <p className="text-gray-600">{selectedUser.email}</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="mb-2">
                        <span className="font-medium">Role: </span>
                        {renderRoleBadge(selectedUser.role)}
                      </div>
                      <div>
                        <span className="font-medium">Status: </span>
                        {renderStatusBadge(selectedUser.isdeleted)}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">
                        Account Created
                      </h4>
                      <p>{new Date(selectedUser.createdAt).toLocaleString()}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">
                        Last Updated
                      </h4>
                      <p>{new Date(selectedUser.updatedAt).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Courses Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Courses ({selectedUser.courses?.length || 0})
                </h3>
                {selectedUser.courses?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedUser.courses.map((course) => (
                      <div
                        key={course._id}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-medium text-gray-800">
                          {course.courseTitle}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {course.courseDescription}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No courses found</p>
                )}
              </div>

              {/* Certificates Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Certificates ({selectedUser.Certificate?.length || 0})
                </h3>
                {selectedUser.Certificate?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedUser.Certificate.map((cert) => (
                      <div
                        key={cert._id}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-medium text-gray-800">
                          Certificate for Course ID: {cert.courseId}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Issued:{" "}
                          {new Date(
                            cert.certificateIssuedDate
                          ).toLocaleDateString()}
                        </p>
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                        >
                          View Certificate
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No certificates found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashUsers;
