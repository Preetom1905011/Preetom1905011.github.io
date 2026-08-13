export function CV() {
  return (
    <section className="page-card narrow-page">
      <p className="eyebrow">Curriculum Vitae</p>
      <div className="button-row">
        <a className="primary-button" href="./cv.pdf" target="_blank" rel="noreferrer">
          Download CV
        </a>
      </div>
      <iframe className="pdf-preview" src="./cv.pdf" title="Preetom Biswas CV preview" />
    </section>
  );
}
