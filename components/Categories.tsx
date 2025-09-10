
import React from 'react';
import { CATEGORIES } from '../constants';
import type { Category } from '../types';

const CategoryItem: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <div className="flex flex-col items-center space-y-3 text-center">
      <div className="w-20 h-20 border-2 border-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-green-50 hover:shadow-md cursor-pointer">
        <category.icon className="h-10 w-10 text-green-600" />
      </div>
      <span className="text-sm text-gray-700 font-medium w-24">{category.name}</span>
    </div>
  );
};


const Categories: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Medicine Categories</h2>
      <div className="flex justify-around items-start">
        {CATEGORIES.map((category) => (
          <CategoryItem key={category.name} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
