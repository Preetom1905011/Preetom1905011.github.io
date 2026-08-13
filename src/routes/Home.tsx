import { Link } from "react-router-dom";
import { NewsList } from "../components/NewsList";
import { ProfileCard } from "../components/ProfileCard";
import { PublicationList } from "../components/PublicationList";
import { RichText } from "../components/RichText";
import { profile } from "../data/profile";

export function Home() {
  return (
    <div className="home-grid">
      <ProfileCard />

      <div className="content-stack">
        <section className="hero-card">
          <p className="eyebrow-home">Computer Science & Engineering · University of Michigan</p>
          <h3>About Me</h3>
          <p className="lead">
            <RichText segments={profile.bio} />
          </p>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">News</p>
            </div>
          </div>
          <NewsList limit={5} />
          <Link className="text-link see-all-link" to="/news">
            See all news updates
          </Link>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Recent Publications</p>
            </div>
          </div>
          <PublicationList selectedOnly limit={3} />
          <Link className="text-link see-all-link" to="/publications">
            See all publications
          </Link>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Services</p>
            </div>
          </div>
          <ul className="services-list">
            <li>Reviewer: KDD 2026, PLOS ONE, IEEE</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
