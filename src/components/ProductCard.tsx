
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
  timestamp: string;
}

const ProductCard = ({ id, title, price, image, location, timestamp }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-md">
        <div className="aspect-video relative overflow-hidden bg-gray-100">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-3">
          <h3 className="font-medium text-base line-clamp-2 mb-1">{title}</h3>
          <p className="font-bold text-lg text-marktplaats-orange">${price.toFixed(2)}</p>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>{location}</span>
            <span>{timestamp}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
