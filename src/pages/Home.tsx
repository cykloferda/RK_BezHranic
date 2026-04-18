import { Link } from 'react-router-dom';
import { MapPin, Globe, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Bydlení bez hranic</h1>
        <p>
          Specializujeme se na nemovitosti v příhraničí. Pomůžeme vám najít ideální domov nebo investiční příležitost v Zittau a okolí.
        </p>
        
        <div className="badge-row">
          <span className="badge"><MapPin size={14} className="mr-1" /> Zittau</span>
          <span className="badge"><Globe size={14} className="mr-1" /> Liberecký kraj</span>
          <span className="badge"><CheckCircle size={14} className="mr-1" /> CZ / DE</span>
        </div>

        <div className="cta-row">
          <Link to="/nabidka" className="button primary">
            Zobrazit nabídku
          </Link>
          <Link to="/kontakt" className="button secondary">
            Kontaktujte nás
          </Link>
        </div>
      </div>

      <div className="grid-2">
        <div className="info-box">
          <h3>Proč právě my?</h3>
          <p>
            Nabízíme kompletní servis při nákupu nemovitostí v Německu. Rozumíme specifikům trhu a postaráme se o veškerou administrativu.
          </p>
          <ul>
            <li>Znalost místního trhu v Zittau a okolí</li>
            <li>Právní a administrativní podpora v obou jazycích</li>
            <li>Osobní přístup a férové jednání</li>
          </ul>
        </div>
        
        <div className="contact-box">
          <h3>Rychlý kontakt</h3>
          <p className="meta">Máte dotaz? Neváhejte nám zavolat nebo napsat.</p>
          <p><strong>Telefon:</strong> +420 724 272 953</p>
          <p><strong>E-mail:</strong> ivan.solin@seznam.cz</p>
        </div>
      </div>
    </div>
  );
}
