export default function Analytics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Website Traffic</h3>
        <div className="h-64 bg-gray-100 flex items-center justify-center">
          <p className="text-gray-500">Chart placeholder</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Sales Overview</h3>
        <div className="h-64 bg-gray-100 flex items-center justify-center">
          <p className="text-gray-500">Chart placeholder</p>
        </div>
      </div>
    </div>
  );
}
