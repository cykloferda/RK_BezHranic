import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container">
      <h1>Kontakt</h1>
      <p>Jsme tu pro vás. Kontaktujte nás telefonicky, e-mailem nebo nás navštivte osobně v naší kanceláři.</p>

      <div className="grid-2">
        <section className="info-box">
          <h3>Naše pobočky a partneři</h3>
          
          <div className="contact-item">
            <strong>Alexander Wittig</strong>
            Holtz Hausverwaltungen GmbH<br />
            Markt 11, 02763 Zittau, Německo
          </div>

          <div className="contact-item">
            <strong>Ivan Šolín</strong>
            Südstrasse 34, 02763 Zittau, Německo<br />
            <a href="mailto:ivan.solin@seznam.cz" className="flex items-center gap-2 mt-2">
              <Mail size={16} /> ivan.solin@seznam.cz
            </a>
            <a href="tel:+420724272953" className="flex items-center gap-2 mt-1">
              <Phone size={16} /> +420 724 272 953
            </a>
          </div>
          
          <p className="meta mt-4 flex items-center gap-2">
            <MapPin size={16} /> Najdete nás přímo v centru historické Žitavy na náměstí Markt 11.
          </p>
        </section>

        <div className="map-embed">
          <iframe 
            src="https://www.google.com/maps/embed?pb=%211m18%211m12%211m3%211d2516.5077588770964%212d14.804038676806904%213d50.895820255196284%212m3%211f0%212f0%213f0%213m2%211i1024%212i768%214f13.1%213m3%211m2%211s0x47093d399b7e86fd%3A0xce83b1d05635c531%212sMarkt%2011%2C%2002763%20Zittau%2C%20N%C4%9Bmecko%215e0%213m2%211scs%212scz%214v1776291126258%215m2%211scs%212scz"
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Kancelář"
          />
        </div>
      </div>
    </div>
  );
}
