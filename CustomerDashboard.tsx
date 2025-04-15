import DashboardLayout from '../../components/DashboardLayout';
import { ShoppingBag, Clock, CheckCircle } from 'lucide-react';

const CustomerDashboard = () => {
  const orders = [
    {
      id: 'ORD001',
      date: '2024-02-25',
      items: ['Classic Burger x2', 'French Fries x1'],
      total: 45.98,
      status: 'delivered'
    },
    {
      id: 'ORD002',
      date: '2024-02-24',
      items: ['Margherita Pizza x1', 'Caesar Salad x1'],
      total: 32.50,
      status: 'preparing'
    }
  ];

  return (
    <DashboardLayout title="Customer Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Orders</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
            <ShoppingBag className="text-orange-500" size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Active Orders</p>
              <h3 className="text-2xl font-bold">1</h3>
            </div>
            <Clock className="text-blue-500" size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Completed Orders</p>
              <h3 className="text-2xl font-bold">11</h3>
            </div>
            <CheckCircle className="text-green-500" size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Order History</h3>
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order.id} className="border p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">Order #{order.id}</h4>
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    order.status === 'delivered' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
                <ul className="text-sm text-gray-600 mb-2">
                  {order.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total: ${order.total.toFixed(2)}</span>
                  {order.status === 'delivered' && (
                    <button className="text-orange-500 hover:text-orange-600">
                      Reorder
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDashboard;