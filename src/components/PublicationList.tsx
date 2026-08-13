import { publications } from "../data/publications";
import { profile } from "../data/profile";

type PublicationListProps = {
  selectedOnly?: boolean;
  limit?: number;
};

function normalizeName(name: string) {
  return name.toLowerCase().replace(/\s+/g, " ").trim();
}

export function PublicationList({ selectedOnly = false, limit }: PublicationListProps) {
  const hasSelectedPublications = publications.some((publication) => publication.selected);
  const selfNames = new Set(profile.nameVariants.map(normalizeName));
  const filtered = publications.filter((publication) =>
    selectedOnly && hasSelectedPublications ? publication.selected : true,
  );

  const visiblePublications = typeof limit === "number" ? filtered.slice(0, limit) : filtered;

  return (
    <div className="publication-list">
      {visiblePublications.map((publication) => (
        <article className="publication-card" key={publication.key}>
          <div className="publication-year">{publication.year}</div>
          <div>
            <h3>{publication.title}</h3>
            <p className="publication-authors">
              {publication.authors.map((author, index) => (
                <span key={author}>
                  <span className={selfNames.has(normalizeName(author)) ? "author-self" : undefined}>
                    {author}
                  </span>
                  {index < publication.authors.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
            <p className="publication-venue">
              {publication.venueUrl ? (
                <a href={publication.venueUrl} target="_blank" rel="noreferrer">
                  {publication.venue}
                </a>
              ) : (
                publication.venue
              )}
              {publication.note ? ` · ${publication.note}` : ""}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
