import { useEffect, useRef } from "react";
import { hobbiesDescription, hobbyPhotos } from "../data/about";
import { RichText } from "./RichText";

export function HobbiesGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (!gallery || gallery.scrollWidth <= gallery.clientWidth) {
      return;
    }

    const photos = gallery.querySelectorAll<HTMLElement>(".polaroid");
    const centerPhoto = photos[Math.floor((photos.length - 1) / 2)];

    if (centerPhoto) {
      gallery.scrollLeft = centerPhoto.offsetLeft + centerPhoto.offsetWidth / 2 - gallery.clientWidth / 2;
    }
  }, []);

  return (
    <section className="about-section hobbies-section" aria-labelledby="hobbies-heading">
      <h2 id="hobbies-heading">Hobbies</h2>
      <p>
        <RichText segments={hobbiesDescription} />
      </p>
      {hobbyPhotos.length > 0 ? (
        <div ref={galleryRef} className="hobbies-gallery" aria-label="Hobby photos">
          <div className="hobbies-gallery-track">
            {hobbyPhotos.map((photo, index) => (
              <figure className="polaroid" key={`${photo.src}-${photo.caption}-${index}`}>
                <img src={photo.src} alt={photo.alt} />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ) : (
        <p className="empty-state">Add hobby photos in <code>src/data/about.ts</code>.</p>
      )}
    </section>
  );
}
