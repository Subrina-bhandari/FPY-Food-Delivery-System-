export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'chef' | 'cashier' | 'delivery' | 'customer';
  name: string;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: 'pending' | 'preparing' | 'ready' | 'delivering' | 'delivered';
  total: number;
  createdAt: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
  deliveryAddress: string;
}

export interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export interface DashboardStats {
  totalOrders: number;
  totalRevenue: number;
  pendingOrders: number;
  completedOrders: number;
}