export default function About() {
  return (
    <div className="container">
      <h1>O nás</h1>
      <p>Jsme váš partner pro reality v česko-německém pohraničí.</p>
      
      <div className="grid-2 mt-8 items-stretch">
        <div className="section m-0 h-full flex flex-col justify-center">
          <h2>Naše vize</h2>
          <p>
            Reality "Bez Hranic" vznikly s myšlenkou propojit lidi se zajímavým bydlením v regionu, kde se hranice stávají jen čarou na mapě. 
            Věříme, že Zittau a jeho okolí nabízí mimořádný potenciál pro kvalitní a dostupné bydlení.
          </p>
          <p>
            Naším cílem je bořit bariéry při nákupu nemovitostí v zahraničí a poskytovat jistotu a bezpečí po celou dobu transakce.
          </p>
        </div>
        
        <div className="section m-0 p-0 overflow-hidden h-full flex">
          <img 
            src="/onas.jpg" 
            alt="Naše zázemí" 
            className="w-full h-full object-cover block" 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="info-box mt-6">
        <h3>Profesionální zázemí</h3>
        <p>
          Díky spolupráci s německými partnery, jako je Holtz Hausverwaltungen GmbH, zajišťujeme hladký průběh transakcí a následnou správu nemovitostí.
        </p>
      </div>
      
      <div className="footer-note">
        <p>© 2026 Reality Bez Hranic - Všechna práva vyhrazena.</p>
      </div>
    </div>
  );
}
