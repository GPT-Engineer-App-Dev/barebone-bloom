import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button"

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-50 text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 bg-white shadow-md rounded-lg my-8">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Welcome to Your App</h2>
        <p className="text-lg mb-6 text-gray-700">This is a sophisticated application that you can modify and build upon.</p>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white">Get Started</Button>
      </main>
      <Footer />
    </div>
  );
};

export default Index;