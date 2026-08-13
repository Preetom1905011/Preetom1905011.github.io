import { NewsList } from "../components/NewsList";

export function News() {
  return (
    <section className="page-card narrow-page">
      <p className="eyebrow">News</p>
      <br />
      <NewsList />
    </section>
  );
}
