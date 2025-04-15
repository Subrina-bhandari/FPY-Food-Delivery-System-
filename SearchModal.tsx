import React, { useState, useEffect } from 'react';
import { X, Search as SearchIcon } from 'lucide-react';
import { MenuItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, menuItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<MenuItem[]>([]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = menuItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm, menuItems]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-x-0 top-0 bg-white shadow-xl max-h-[80vh] overflow-y-auto">
        <div className="max-w-3xl mx-auto p-4">
          <div className="flex items-center gap-2 mb-4">
            <SearchIcon size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search for dishes, categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 outline-none text-lg"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {searchTerm && (
            <div className="space-y-4">
              {results.length === 0 ? (
                <p className="text-center text-gray-500 py-4">No results found</p>
              ) : (
                results.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-orange-500 mt-1">${item.price}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;