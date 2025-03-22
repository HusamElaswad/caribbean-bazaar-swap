
import React from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, SlidersHorizontal, MapPin, ChevronDown 
} from "lucide-react";

// Mock data for demonstration
const products = [
  { id: "1", title: "iPhone 13 Pro - Excellent Condition", price: 699, image: "https://placehold.co/400x300/e9ecef/495057?text=iPhone+13", location: "Kingston", timestamp: "2 days ago" },
  { id: "2", title: "Wooden Dining Table with 4 Chairs", price: 350, image: "https://placehold.co/400x300/e9ecef/495057?text=Dining+Table", location: "Montego Bay", timestamp: "3 hours ago" },
  { id: "3", title: "Sony PlayStation 5 with 2 Controllers", price: 450, image: "https://placehold.co/400x300/e9ecef/495057?text=PS5", location: "Nassau", timestamp: "5 days ago" },
  { id: "4", title: "2019 Toyota Corolla - Low Mileage", price: 15000, image: "https://placehold.co/400x300/e9ecef/495057?text=Toyota+Corolla", location: "Bridgetown", timestamp: "1 week ago" },
  { id: "5", title: "Apple Watch Series 7 - GPS", price: 280, image: "https://placehold.co/400x300/e9ecef/495057?text=Apple+Watch", location: "Port of Spain", timestamp: "1 day ago" },
  { id: "6", title: "Canon EOS 80D DSLR Camera", price: 650, image: "https://placehold.co/400x300/e9ecef/495057?text=Canon+Camera", location: "Havana", timestamp: "4 days ago" },
  { id: "7", title: "Samsung 55\" 4K Smart TV", price: 520, image: "https://placehold.co/400x300/e9ecef/495057?text=Samsung+TV", location: "Castries", timestamp: "2 days ago" },
  { id: "8", title: "Mountain Bike - Trek Marlin 7", price: 575, image: "https://placehold.co/400x300/e9ecef/495057?text=Mountain+Bike", location: "Santo Domingo", timestamp: "6 hours ago" },
  { id: "9", title: "Leather Sofa - 3 Seater", price: 425, image: "https://placehold.co/400x300/e9ecef/495057?text=Leather+Sofa", location: "Kingston", timestamp: "3 days ago" },
  { id: "10", title: "MacBook Pro 16\" 2021 - M1 Pro", price: 1800, image: "https://placehold.co/400x300/e9ecef/495057?text=MacBook+Pro", location: "Nassau", timestamp: "1 week ago" },
  { id: "11", title: "Nikon Z6 Mirrorless Camera", price: 1200, image: "https://placehold.co/400x300/e9ecef/495057?text=Nikon+Z6", location: "Bridgetown", timestamp: "2 days ago" },
  { id: "12", title: "Samsung Galaxy S22 Ultra", price: 750, image: "https://placehold.co/400x300/e9ecef/495057?text=Galaxy+S22", location: "Port of Spain", timestamp: "5 days ago" },
];

const ProductListing = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "All Categories";
  
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-24">
            <h2 className="font-bold text-lg mb-4">Filters</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Category</label>
              <div className="relative">
                <select className="w-full p-2 border border-gray-300 rounded bg-white appearance-none pr-10">
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Vehicles</option>
                  <option>Property</option>
                  <option>Home & Garden</option>
                  <option>Fashion</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Location</label>
              <div className="relative">
                <select className="w-full p-2 border border-gray-300 rounded bg-white appearance-none pr-10">
                  <option>All Locations</option>
                  <option>Jamaica</option>
                  <option>Bahamas</option>
                  <option>Barbados</option>
                  <option>Trinidad & Tobago</option>
                  <option>Dominican Republic</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Price Range</label>
              <div className="flex space-x-2">
                <Input type="number" placeholder="Min" className="w-1/2" />
                <Input type="number" placeholder="Max" className="w-1/2" />
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <Button className="w-full bg-marktplaats-orange hover:bg-marktplaats-orange-dark">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="md:col-span-3">
          {/* Search and Sort */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Input 
                  placeholder="Search in this category..." 
                  className="w-full pr-10" 
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex gap-1">
                  <SlidersHorizontal size={18} />
                  <span className="hidden sm:inline">Sort</span>
                </Button>
                <Button variant="outline" className="flex gap-1">
                  <MapPin size={18} />
                  <span className="hidden sm:inline">Distance</span>
                </Button>
              </div>
            </div>
          </div>
          
          <h1 className="text-xl font-bold mb-4">{category} ({products.length})</h1>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                location={product.location}
                timestamp={product.timestamp}
              />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-1">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" className="bg-marktplaats-orange text-white border-marktplaats-orange">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListing;
