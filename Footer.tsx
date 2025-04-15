import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fusion Bites</h3>
            <p className="text-gray-400">
              Delivering delicious meals right to your doorstep. Experience the perfect blend of flavors.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-400">
                <Phone size={18} />
                <a href="tel:9804326731">980-432-6731</a>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <Mail size={18} />
                <a href="mailto:info@fusionbites.com">info@fusionbites.com</a>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                123 Foodie Street, Cuisine City
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#mobile-app" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Mobile App
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fusion Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;