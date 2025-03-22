
import React from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, Car, Home, ShoppingBag, Briefcase, 
  Activity, Tv, BookOpen, Gift, MoreHorizontal 
} from "lucide-react";

// Mock data for demonstration
const featuredProducts = [
  { id: "1", title: "iPhone 13 Pro - Excellent Condition", price: 699, image: "https://placehold.co/400x300/e9ecef/495057?text=iPhone+13", location: "Kingston", timestamp: "2 days ago" },
  { id: "2", title: "Wooden Dining Table with 4 Chairs", price: 350, image: "https://placehold.co/400x300/e9ecef/495057?text=Dining+Table", location: "Montego Bay", timestamp: "3 hours ago" },
  { id: "3", title: "Sony PlayStation 5 with 2 Controllers", price: 450, image: "https://placehold.co/400x300/e9ecef/495057?text=PS5", location: "Nassau", timestamp: "5 days ago" },
  { id: "4", title: "2019 Toyota Corolla - Low Mileage", price: 15000, image: "https://placehold.co/400x300/e9ecef/495057?text=Toyota+Corolla", location: "Bridgetown", timestamp: "1 week ago" },
  { id: "5", title: "Apple Watch Series 7 - GPS", price: 280, image: "https://placehold.co/400x300/e9ecef/495057?text=Apple+Watch", location: "Port of Spain", timestamp: "1 day ago" },
  { id: "6", title: "Canon EOS 80D DSLR Camera", price: 650, image: "https://placehold.co/400x300/e9ecef/495057?text=Canon+Camera", location: "Havana", timestamp: "4 days ago" },
  { id: "7", title: "Samsung 55\" 4K Smart TV", price: 520, image: "https://placehold.co/400x300/e9ecef/495057?text=Samsung+TV", location: "Castries", timestamp: "2 days ago" },
  { id: "8", title: "Mountain Bike - Trek Marlin 7", price: 575, image: "https://placehold.co/400x300/e9ecef/495057?text=Mountain+Bike", location: "Santo Domingo", timestamp: "6 hours ago" },
];

const categories = [
  { name: "Electronics", icon: <Smartphone size={24} />, count: 358 },
  { name: "Vehicles", icon: <Car size={24} />, count: 273 },
  { name: "Property", icon: <Home size={24} />, count: 195 },
  { name: "Fashion", icon: <ShoppingBag size={24} />, count: 412 },
  { name: "Jobs", icon: <Briefcase size={24} />, count: 127 },
  { name: "Services", icon: <Activity size={24} />, count: 203 },
  { name: "Home & Garden", icon: <Tv size={24} />, count: 287 },
  { name: "Education", icon: <BookOpen size={24} />, count: 146 },
  { name: "Hobbies", icon: <Gift size={24} />, count: 318 },
  { name: "More", icon: <MoreHorizontal size={24} />, count: 500 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="bg-marktplaats-orange-light rounded-lg p-6 mb-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-3">Buy & Sell in the Caribbean</h1>
          <p className="mb-4 text-white/90">Find amazing deals near you or list your items and reach thousands of buyers across the Caribbean!</p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-white text-marktplaats-orange hover:bg-gray-100">Explore Items</Button>
            <Button className="bg-marktplaats-orange-dark hover:bg-marktplaats-orange border-2 border-white">Post Your Ad</Button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Browse Categories</h2>
          <Button variant="link" className="text-marktplaats-orange">View All</Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              name={category.name}
              icon={category.icon}
              count={category.count}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recently Added</h2>
          <Button variant="link" className="text-marktplaats-orange">View All</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
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
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-100 rounded-lg p-6 my-10 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to sell your items?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          It takes just a few minutes to create your listing and reach thousands of buyers in the Caribbean.
        </p>
        <Button className="bg-marktplaats-orange hover:bg-marktplaats-orange-dark">
          Post an Ad Now
        </Button>
      </section>
    </Layout>
  );
};

export default Index;
