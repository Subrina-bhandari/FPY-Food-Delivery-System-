import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef patty with fresh lettuce, tomatoes, and our special sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80",
    category: "Burgers"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomatoes, and basil on our house-made crust",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80",
    category: "Pizza"
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80",
    category: "Salads"
  },
  {
    id: 4,
    name: "Sushi Roll Platter",
    description: "Assorted fresh sushi rolls with wasabi and pickled ginger",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80",
    category: "Sushi"
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80",
    category: "Desserts"
  },
  {
    id: 6,
    name: "Quinoa Buddha Bowl",
    description: "Nutrient-rich bowl with quinoa, roasted vegetables, avocado, and tahini dressing",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1546007600-8c2e5a9b8310?auto=format&fit=crop&q=80",
    category: "Healthy"
  },
  {
    id: 7,
    name: "Spicy Ramen",
    description: "Traditional Japanese ramen with rich broth, tender pork, and soft-boiled egg",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80",
    category: "Asian"
  },
  {
    id: 8,
    name: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80",
    category: "Desserts"
  },
  {
    id: 9,
    name: "Chicken Wings",
    description: "Crispy wings tossed in your choice of BBQ, Buffalo, or Honey Garlic sauce",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80",
    category: "Appetizers"
  },
  {
    id: 10,
    name: "Mediterranean Wrap",
    description: "Grilled vegetables, hummus, feta cheese, and olives in a whole wheat wrap",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?auto=format&fit=crop&q=80",
    category: "Healthy"
  },
  {
    id: 11,
    name: "Fish & Chips",
    description: "Beer-battered cod with crispy fries, tartar sauce, and mushy peas",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1579208030886-b937da0925dc?auto=format&fit=crop&q=80",
    category: "Main Course"
  },
  {
    id: 12,
    name: "New York Cheesecake",
    description: "Rich and creamy cheesecake with berry compote",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80",
    category: "Desserts"
  },
  {
    id: 13,
    name: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, peanuts, and tamarind sauce",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80",
    category: "Asian"
  },
  {
    id: 14,
    name: "Acai Bowl",
    description: "Blended acai topped with granola, fresh fruits, and honey",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80",
    category: "Healthy"
  },
  {
    id: 15,
    name: "Steak Frites",
    description: "Grilled ribeye steak with garlic butter and crispy french fries",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80",
    category: "Main Course"
  }
];

const Menu = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(menuItems.map(item => item.category)))];
  
  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-orange-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-orange-500 font-semibold">${item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.category}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

export { menuItems };