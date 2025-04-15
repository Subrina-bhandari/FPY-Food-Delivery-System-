import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Home } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
  const navigate = useNavigate();
  const { user, setUser } = useAuthStore();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-500">Fusion Bites</h1>
              <span className="ml-4 text-gray-500">|</span>
              <span className="ml-4 text-gray-700">{title}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-gray-700">
                Welcome, {user?.name}
              </div>
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-orange-500"
              >
                <Home size={20} />
              </button>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-orange-500"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;