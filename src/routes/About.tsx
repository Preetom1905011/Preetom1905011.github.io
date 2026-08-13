import { AwardsList } from "../components/AwardsList";
import { ExperienceList } from "../components/ExperienceList";
import { HobbiesGallery } from "../components/HobbiesGallery";

export function About() {
  return (
    <section className="page-card narrow-page">
      <p className="eyebrow">More About Me</p>
      <ExperienceList />
      <AwardsList />
      <HobbiesGallery />
    </section>
  );
}
