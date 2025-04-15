import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';   
import MobileApp from './components/MobileApp';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import ChefDashboard from './pages/dashboards/ChefDashboard';
import CashierDashboard from './pages/dashboards/CashierDashboard';
import DeliveryDashboard from './pages/dashboards/DeliveryDashboard';
import CustomerDashboard from './pages/dashboards/CustomerDashboard';
import Checkout from './pages/Checkout';
import { useAuthStore } from './store/authStore';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <Router> 
      <CartProvider>
        <Routes>
          {/* Public routes */}
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-white">
                <Navbar />
                <Hero />
                <Menu />
                <MobileApp />
                <Footer />
              </div>
            }
          />

          {/* Protected routes */}
          <Route
            path="/checkout"
            element={
              <ProtectedRoute allowedRoles={['customer']}>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                (() => {
                  switch (user?.role) {
                    case 'admin':
                      return <AdminDashboard />;
                    case 'chef':
                      return <ChefDashboard />;
                    case 'cashier':
                      return <CashierDashboard />;
                    case 'delivery':
                      return <DeliveryDashboard />;
                    case 'customer':
                      return <CustomerDashboard />;
                    default:
                      return <Navigate to="/" />;
                  }
                })()
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;