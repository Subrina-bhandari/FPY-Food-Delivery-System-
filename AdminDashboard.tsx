import DashboardLayout from '../../components/DashboardLayout';
import { Users, DollarSign, ShoppingBag, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const stats = {
    totalUsers: 150,
    totalRevenue: 15789.50,
    totalOrders: 324,
    activeOrders: 12
  };

  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Users</p>
              <h3 className="text-2xl font-bold">{stats.totalUsers}</h3>
            </div>
            <Users className="text-orange-500" size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold">${stats.totalRevenue.toFixed(2)}</h3>
            </div>
            <DollarSign className="text-green-500" size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Orders</p>
              <h3 className="text-2xl font-bold">{stats.totalOrders}</h3>
            </div>
            <ShoppingBag className="text-blue-500" size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Active Orders</p>
              <h3 className="text-2xl font-bold">{stats.activeOrders}</h3>
            </div>
            <TrendingUp className="text-purple-500" size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          {/* Add order list component here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Staff Management</h3>
          {/* Add staff management component here */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;