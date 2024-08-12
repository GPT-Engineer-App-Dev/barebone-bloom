import React from 'react';
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-rose-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <Button variant="ghost" size="icon" className="text-white hover:text-rose-200">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;