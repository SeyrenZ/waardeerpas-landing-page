import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Over ons", href: "#" },
    { name: "Voor wie?", href: "#" },
    { name: "Aanbod", href: "#" },
    { name: "Cases", href: "#" },
    { name: "Nieuws", href: "#" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white backdrop-blur-md border-b border-[#1E2460]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="w-28 sm:w-40" />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#1E2460] hover:text-[#FF5758] font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-[#FF5758] h-12 hover:bg-[#FF5758]/90 text-white font-bold px-6 rounded-full">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1E2460] hover:text-[#FF5758] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 top-16 sm:top-20 h-screen bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-b border-[#1E2460]/10 overflow-hidden relative z-50"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 text-base font-medium text-[#1E2460] hover:text-[#FF5758] hover:bg-[#1E2460]/5 rounded-md"
                  >
                    {link.name}
                  </a>
                ))}

                <Button className="w-full bg-[#FF5758] hover:bg-[#FF5758]/90 text-white font-bold rounded-full mt-4">
                  Contact
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
