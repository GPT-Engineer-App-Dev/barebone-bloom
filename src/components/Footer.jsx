import React from 'react';
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">My App</h3>
            <p className="text-sm">© 2024 All rights reserved.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-white p-0 h-auto">About Us</Button></li>
              <li><Button variant="link" className="text-white p-0 h-auto">Services</Button></li>
              <li><Button variant="link" className="text-white p-0 h-auto">Contact</Button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-white p-0 h-auto">Privacy Policy</Button></li>
              <li><Button variant="link" className="text-white p-0 h-auto">Terms of Service</Button></li>
              <li><Button variant="link" className="text-white p-0 h-auto">Cookie Policy</Button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-blue-200">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-blue-200">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-blue-200">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-blue-200">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;