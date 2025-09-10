
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="bg-gray-50 flex justify-center items-center p-4 h-48">
        <img src={product.imageUrl} alt={product.name} className="max-h-32 object-contain" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
        <div className="flex justify-between items-center mt-3">
          <p className="text-md text-gray-700">${product.price.toFixed(2)}</p>
          <button className="px-3 py-1.5 bg-green-600 text-white text-xs font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
