import { experiences } from "../data/about";

export function ExperienceList() {
  return (
    <section className="about-section" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>
      {experiences.length > 0 ? (
        <ul className="experience-list">
          {experiences.map((experience) => (
            <li key={`${experience.position}-${experience.institution}-${experience.period}`}>
              <div>
                <strong>{experience.position}</strong>
                <span>{experience.institution}</span>
              </div>
              <time>{experience.period}</time>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-state">Experience entries will appear here.</p>
      )}
    </section>
  );
}
