import { MessageSquare, ListTodo } from 'lucide-react';

export default function Functional() {
  return (
    <div className="container">
      <h1>Pracovní prostor</h1>
      <p>Tato stránka slouží k diskuzi o obsahu a funkcích webu před finálním nasazením.</p>

      <div className="grid-2 mt-8">
        <section className="info-box">
          <h3 className="flex items-center gap-2">
            <ListTodo size={20} /> Návrhy a body k diskuzi
          </h3>
          <p className="meta">Poznámky pro kolegy:</p>
          <ul>
            <li>Schválení finální struktury menu</li>
            <li>Upřesnění textů v sekci O nás</li>
            <li>Zpětná vazba k barevnosti a fontům</li>
            <li>Kontrola funkčnosti formulářů a odkazů</li>
          </ul>
        </section>

        <section className="section m-0 h-full flex flex-col">
          <h3 className="flex items-center gap-2">
            <MessageSquare size={20} /> Komentáře a vyjádření
          </h3>
          <div className="bg-surface-2 p-4 rounded-xl mb-4 border border-border">
            <p className="font-bold text-sm">Poznámka [Kolega]:</p>
            <p className="text-sm italic">"Vypadá to velmi čistě a profesionálně. Rád bych ještě doladil ty fotky u nemovitostí."</p>
          </div>
          <div className="bg-surface-2 p-4 rounded-xl border border-border">
            <p className="font-bold text-sm">Odpověď [Ty]:</p>
            <p className="text-sm italic">"Rozumím, upravíme cestu k obrázkům a sjednotíme jejich formát."</p>
          </div>
        </section>
      </div>

      <div className="footer-note mt-12">
        <p><strong>Nápověda:</strong> Až bude obsah schválen, tuto stránku jednoduše přejmenujeme na zamýšlený modul.</p>
      </div>
    </div>
  );
}
