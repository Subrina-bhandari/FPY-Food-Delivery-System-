import { useState } from 'react'; 
import DashboardLayout from '../../components/DashboardLayout';
import { DollarSign, CheckCircle, XCircle, Clock} from 'lucide-react';

const CashierDashboard = () => {
  const [payments, setPayments] = useState([
    {
      id: '1',
      orderId: 'ORD001',
      amount: 45.98,
      status: 'pending',
      customer: 'John Doe'
    },
    {
      id: '2',
      orderId: 'ORD002',
      amount: 32.50,
      status: 'completed',
      customer: 'Jane Smith'
    }
  ]);

  const updatePaymentStatus = (paymentId: string, newStatus: 'completed' | 'failed') => {
    setPayments(payments.map(payment => 
      payment.id === paymentId ? { ...payment, status: newStatus } : payment
    ));
  };

  return (
    <DashboardLayout title="Cashier Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Today's Revenue</p>
              <h3 className="text-2xl font-bold">$789.50</h3>
            </div>
            <DollarSign className="text-green-500" size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Pending Payments</p>
              <h3 className="text-2xl font-bold">5</h3>
            </div>
            <Clock className="text-yellow-500" size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md"> 
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Completed Payments</p>
              <h3 className="text-2xl font-bold">28</h3>
            </div>
            <CheckCircle className="text-blue-500" size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Payment Queue</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-3">Order ID</th> 
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map(payment => (
                  <tr key={payment.id} className="border-b">
                    <td className="py-4">{payment.orderId}</td>
                    <td className="py-4">{payment.customer}</td>
                    <td className="py-4">${payment.amount.toFixed(2)}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        payment.status === 'completed' 
                          ? 'bg-green-100 text-green-800'
                          : payment.status === 'failed'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4">
                      {payment.status === 'pending' && (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => updatePaymentStatus(payment.id, 'completed')}
                            className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                          >
                            <CheckCircle size={16} />
                            Complete
                          </button>
                          <button
                            onClick={() => updatePaymentStatus(payment.id, 'failed')}
                            className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                          >
                            <XCircle size={16} />
                            Fail
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CashierDashboard;