export default function Offer() {
  return (
    <div className="container">
      <h1>Nabídka nemovitostí</h1>
      <p>Prohlédněte si naši aktuální nabídku domů, bytů a pozemků v regionu Žitavy a okolí.</p>
      
      <div className="section">
        <div className="airtable-embed">
          <iframe 
            src="https://airtable.com/embed/app1ODdw65a2AotPB/shrhONzk561Bqk8GG?viewControls=on"
            frameBorder="0" 
            onWheel={() => {}} 
            width="100%" 
            height="600" 
            style={{ background: 'transparent', border: 'none' }}
            title="Airtable Offer"
          />
        </div>
      </div>
      
      <div className="footer-note">
        <p>Nabídku pravidelně aktualizujeme. Pokud jste nenašli, co hledáte, kontaktujte nás s vaší poptávkou.</p>
      </div>
    </div>
  );
}
