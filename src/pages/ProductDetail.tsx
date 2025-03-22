
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Mail, Flag, Heart } from "lucide-react";

// Mock product data
const product = {
  id: "1",
  title: "iPhone 13 Pro - Excellent Condition",
  price: 699,
  description: "Selling my iPhone 13 Pro in excellent condition. Includes original box, charger and two cases. Battery health is at 92%. No scratches or dents. Reason for selling: upgraded to newer model.",
  images: [
    "https://placehold.co/800x600/e9ecef/495057?text=iPhone+13+Pro+(1)",
    "https://placehold.co/800x600/e9ecef/495057?text=iPhone+13+Pro+(2)",
    "https://placehold.co/800x600/e9ecef/495057?text=iPhone+13+Pro+(3)",
  ],
  features: ["Color: Graphite", "Storage: 256GB", "Includes: Box, charger, 2 cases", "Battery health: 92%"],
  location: "Kingston, Jamaica",
  postedDate: "April 10, 2023",
  seller: {
    name: "Michael B.",
    memberSince: "January 2020",
    otherAds: 5,
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = React.useState(product.images[0]);

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Images */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-100">
              <img 
                src={mainImage} 
                alt={product.title} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`w-20 h-20 rounded overflow-hidden flex-shrink-0 border-2 ${
                    mainImage === image ? 'border-marktplaats-orange' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.title} - image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product details */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-3xl font-bold text-marktplaats-orange mb-4">${product.price.toFixed(2)}</p>
            
            <div className="flex items-center text-gray-500 mb-6 gap-4">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span className="text-sm">{product.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span className="text-sm">Posted on {product.postedDate}</span>
              </div>
            </div>

            <h2 className="font-bold text-lg mb-3">Description</h2>
            <p className="text-gray-700 mb-6">{product.description}</p>

            <h2 className="font-bold text-lg mb-3">Features</h2>
            <ul className="list-disc pl-5 mb-6">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700 mb-1">{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Seller */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
            <h3 className="font-bold text-lg mb-4">Contact Seller</h3>
            
            <div className="mb-6">
              <h4 className="font-medium">{product.seller.name}</h4>
              <p className="text-sm text-gray-500 mb-2">Member since {product.seller.memberSince}</p>
              <p className="text-sm text-gray-500">{product.seller.otherAds} other active ads</p>
            </div>

            <div className="space-y-3 mb-6">
              <Button className="w-full bg-marktplaats-orange hover:bg-marktplaats-orange-dark flex justify-center gap-2">
                <Phone size={18} />
                Show Phone Number
              </Button>
              <Button variant="outline" className="w-full flex justify-center gap-2">
                <Mail size={18} />
                Send Message
              </Button>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between">
                <Button variant="ghost" size="sm" className="text-gray-500 flex gap-1">
                  <Heart size={18} />
                  <span className="text-sm">Favorite</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 flex gap-1">
                  <Flag size={18} />
                  <span className="text-sm">Report</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
