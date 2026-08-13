import { awards } from "../data/about";

export function AwardsList() {
  return (
    <section className="about-section" aria-labelledby="awards-heading">
      <h2 id="awards-heading">Awards</h2>
      {awards.length > 0 ? (
        <ul className="awards-list">
          {awards.map((award) => (
            <li key={award.title}>{award.title}</li>
          ))}
        </ul>
      ) : (
        <p className="empty-state">Awards will appear here.</p>
      )}
    </section>
  );
}
