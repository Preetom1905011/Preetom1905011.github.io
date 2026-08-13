import { profile } from "../data/profile";

export function About() {
  return (
    <section className="page-card narrow-page">
      <p className="eyebrow">More About Me</p>
      <div className="about-copy">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="about-panels">
        <article>
          <h2>Research Interests</h2>
          <p>Machine learning, computer systems, trustworthy AI, and practical research tools.</p>
        </article>
        <article>
          <h2>Affiliation</h2>
          <p>{profile.title}, {profile.affiliation}</p>
        </article>
      </div>
    </section>
  );
}
