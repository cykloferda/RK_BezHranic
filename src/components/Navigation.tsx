import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Phone, Info, List, Building2, Wrench, Star, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { to: "/", icon: <Home size={18} />, label: "Domů", end: true },
    { to: "/nabidka", icon: <List size={18} />, label: "Nabídka" },
    { to: "/onas", icon: <Info size={18} />, label: "O nás" },
    { to: "/kontakt", icon: <Phone size={18} />, label: "Kontakt" },
    { to: "/recenze", icon: <Star size={18} />, label: "Recenze" },
    { to: "/functional", icon: <Wrench size={18} />, label: "Pracovní" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center relative">
        <NavLink to="/" className="logo">
          <Building2 size={24} /> Reality Bez Hranic
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-3">
          {navLinks.map((link) => (
            <NavLink 
              key={link.to}
              to={link.to} 
              className={({ isActive }) => isActive ? 'active-link' : ''}
              end={link.end}
            >
              {link.icon} {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-brand hover:bg-surface-2 rounded-xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-white lg:hidden flex flex-col p-6 h-screen shadow-2xl"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="logo text-xl font-bold text-brand flex items-center gap-2">
                <Building2 size={24} /> Reality Bez Hranic
              </div>
              <button 
                className="p-2 text-brand hover:bg-surface-2 rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.to}
                  to={link.to} 
                  className={({ isActive }) => 
                    `flex items-center gap-4 p-4 rounded-2xl text-lg font-semibold transition-all ${
                      isActive ? 'bg-brand text-white shadow-lg' : 'hover:bg-surface-2 text-text'
                    }`
                  }
                  end={link.end}
                >
                  <span className={({ isActive }) => isActive ? 'text-white' : 'text-brand'}>
                    {link.icon}
                  </span>
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-border/50 text-center text-sm text-muted">
              <p>© 2026 Reality Bez Hranic</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
