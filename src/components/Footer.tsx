
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Caribbean Bazaar</h3>
            <p className="text-gray-600 text-sm">
              Buy and sell new and used items in the Caribbean easily.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Help & Info</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-marktplaats-orange">How it works</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-marktplaats-orange">Safety tips</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-marktplaats-orange">Contact us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-marktplaats-orange">Electronics</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-marktplaats-orange">Vehicles</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-marktplaats-orange">Furniture</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-marktplaats-orange">Clothing</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-marktplaats-orange">Property</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-marktplaats-orange">Terms of Use</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-marktplaats-orange">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-marktplaats-orange">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Caribbean Bazaar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
