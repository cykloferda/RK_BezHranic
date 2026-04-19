import { NavLink } from 'react-router-dom';
import { Home, Phone, Info, List, Building2, Wrench } from 'lucide-react';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" className="logo">
        <Building2 size={24} /> Reality Bez Hranic
      </NavLink>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
        end
      >
        <Home size={18} /> Domů
      </NavLink>
      <NavLink 
        to="/nabidka" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        <List size={18} /> Nabídka
      </NavLink>
      <NavLink 
        to="/onas" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        <Info size={18} /> O nás
      </NavLink>
      <NavLink 
        to="/kontakt" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        <Phone size={18} /> Kontakt
      </NavLink>
      <NavLink 
        to="/functional" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        <Wrench size={18} /> Pracovní
      </NavLink>
    </nav>
  );
}
