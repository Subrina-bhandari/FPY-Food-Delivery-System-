import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { Clock, CheckCircle } from 'lucide-react';

const ChefDashboard = () => {
  const [orders, setOrders] = useState([
    {
      id: '1',
      items: [
        { name: 'Classic Burger', quantity: 2 },
        { name: 'French Fries', quantity: 1 }
      ],
      status: 'pending',
      timeReceived: '10:30 AM'
    },
    {
      id: '2',
      items: [
        { name: 'Margherita Pizza', quantity: 1 },
        { name: 'Caesar Salad', quantity: 1 }
      ],
      status: 'preparing',
      timeReceived: '10:45 AM'
    }
  ]);

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <DashboardLayout title="Chef Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Pending Orders</h3>
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order.id} className="border p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">Order #{order.id}</h4>
                  <span className="text-sm text-gray-500">{order.timeReceived}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {order.items.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span className="text-gray-600">x{item.quantity}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                  <div className="space-x-2">
                    {order.status === 'pending' && (
                      <button
                        onClick={() => updateOrderStatus(order.id, 'preparing')}
                        className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      >
                        <Clock size={16} />
                        Start Preparing
                      </button>
                    )}
                    {order.status === 'preparing' && (
                      <button
                        onClick={() => updateOrderStatus(order.id, 'ready')}
                        className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                      >
                        <CheckCircle size={16} />
                        Mark Ready
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Today's Special</h3>
          {/* Add special menu items component here */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChefDashboard;