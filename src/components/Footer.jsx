import React from 'react';
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">My App</h3>
            <p className="text-sm">© 2024 All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-white hover:text-blue-200">About</Button>
            <Button variant="ghost" className="text-white hover:text-blue-200">Contact</Button>
            <Button variant="ghost" className="text-white hover:text-blue-200">Privacy Policy</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;