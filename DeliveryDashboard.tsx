import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout'; 
import { MapPin, Package, CheckCircle } from 'lucide-react';

const DeliveryDashboard = () => {
  const [deliveries, setDeliveries] = useState([
    {
      id: '1',
      orderId: 'ORD001',
      customer: 'John Doe',
      address: '123 Main St, Apt 4B',
      status: 'pending',
      items: ['Classic Burger x2', 'French Fries x1']
    },
    {
      id: '2',
      orderId: 'ORD002',
      customer: 'Jane Smith',
      address: '456 Oak Ave',
      status: 'delivering',
      items: ['Margherita Pizza x1', 'Caesar Salad x1']
    }
  ]);

  const updateDeliveryStatus = (deliveryId: string, newStatus: string) => {
    setDeliveries(deliveries.map(delivery => 
      delivery.id === deliveryId ? { ...delivery, status: newStatus } : delivery
    ));
  };

  return (
    <DashboardLayout title="Delivery Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Pending Deliveries</p>
              <h3 className="text-2xl font-bold">3</h3>
            </div>
            <Package className="text-yellow-500" size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">In Progress</p>
              <h3 className="text-2xl font-bold">2</h3>
            </div>
            <MapPin className="text-blue-500" size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Completed Today</p>
              <h3 className="text-2xl font-bold">15</h3>
            </div>
            <CheckCircle className="text-green-500" size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Active Deliveries</h3>
          <div className="space-y-4">
            {deliveries.map(delivery => (
              <div key={delivery.id} className="border p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">Order #{delivery.orderId}</h4>
                    <p className="text-sm text-gray-600">{delivery.customer}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    delivery.status === 'pending' 
                      ? 'bg-yellow-100 text-yellow-800'
                      : delivery.status === 'delivering'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {delivery.status.charAt(0).toUpperCase() + delivery.status.slice(1)}
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin size={16} />
                    {delivery.address}
                  </p>
                </div>
                <ul className="text-sm text-gray-600 mb-4">
                  {delivery.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex justify-end space-x-2">
                  {delivery.status === 'pending' && (
                    <button
                      onClick={() => updateDeliveryStatus(delivery.id, 'delivering')}
                      className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      <MapPin size={16} />
                      Start Delivery
                    </button>
                  )}
                  {delivery.status === 'delivering' && (
                    <button
                      onClick={() => updateDeliveryStatus(delivery.id, 'delivered')}
                      className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                      <CheckCircle size={16} />
                      Mark Delivered
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

export default DeliveryDashboard;