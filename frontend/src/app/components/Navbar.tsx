import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Cases', path: '/cases' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md',
        isScrolled ? 'bg-white/80 shadow-md py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0F3D3E] to-[#1A5F61] flex items-center justify-center text-white font-serif text-xl font-bold">
            V
          </div>
          <div className="hidden md:block">
            <h1 className="font-serif text-xl font-bold text-[#0F3D3E] leading-tight">Varma's</h1>
            <p className="text-[10px] tracking-widest uppercase text-[#C6A969] font-medium">Dental Clinic</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-[#C6A969]',
                  location.pathname === link.path ? 'text-[#0F3D3E] font-semibold' : 'text-gray-600'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={() => window.location.href = 'tel:+919999999999'}
            icon={<Phone className="w-4 h-4" />}
          >
            Call Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#0F3D3E]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-lg font-medium py-2 border-b border-gray-50',
                    location.pathname === link.path ? 'text-[#0F3D3E]' : 'text-gray-600'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="primary" className="w-full justify-center" icon={<Phone className="w-4 h-4" />}>
                  Call Now
                </Button>
                <Button variant="secondary" className="w-full justify-center" icon={<MapPin className="w-4 h-4" />}>
                  Get Directions
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
