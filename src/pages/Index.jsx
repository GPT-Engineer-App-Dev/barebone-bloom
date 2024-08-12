import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button"

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to Your App</h2>
        <p className="text-lg mb-6">This is a bare-bones application that you can modify and build upon.</p>
        <Button>Get Started</Button>
      </main>
      <Footer />
    </div>
  );
};

export default Index;