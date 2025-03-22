
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, User, MessageSquare, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-marktplaats-orange font-bold text-2xl">Caribbean Bazaar</span>
          </Link>

          {/* Search Bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 mx-8 relative">
            <Input 
              placeholder="What are you looking for?" 
              className="w-full rounded-md pr-10" 
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-marktplaats-gray-dark hidden md:flex"
            >
              <MessageSquare size={20} className="mr-2" />
              Messages
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-marktplaats-gray-dark hidden md:flex"
            >
              <User size={20} className="mr-2" />
              Account
            </Button>
            <Button variant="default" size="sm" className="bg-marktplaats-orange hover:bg-marktplaats-orange-dark">
              Post Ad
            </Button>
          </div>
        </div>
        
        {/* Mobile Search - visible only on mobile */}
        <div className="md:hidden pb-3 px-2">
          <div className="relative">
            <Input 
              placeholder="Search anything..." 
              className="w-full rounded-md pr-10" 
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
