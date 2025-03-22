
import React from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  icon: React.ReactNode;
  count: number;
}

const CategoryCard = ({ name, icon, count }: CategoryCardProps) => {
  return (
    <Link to={`/category/${name.toLowerCase()}`} className="block">
      <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-marktplaats-orange transition-colors">
        <div className="w-12 h-12 flex items-center justify-center mb-3 text-marktplaats-orange">
          {icon}
        </div>
        <h3 className="font-medium text-center">{name}</h3>
        <p className="text-xs text-gray-500 mt-1">{count} items</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
