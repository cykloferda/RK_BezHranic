import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Offer from './pages/Offer';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nabidka" element={<Offer />} />
            <Route path="/onas" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
