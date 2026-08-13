import { PublicationList } from "../components/PublicationList";

export function Publications() {
  return (
    <section className="page-card narrow-page">
      <p className="eyebrow">Publications</p>
      <br/>
      <PublicationList />
    </section>
  );
}
