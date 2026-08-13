import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaGraduationCap,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import type { SocialKind } from "../data/types";
import { profile } from "../data/profile";

const socialIcons: Record<SocialKind, IconType> = {
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  scholar: FaGraduationCap,
  website: FaGlobe,
};

export function ProfileCard() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <aside className="profile-card" aria-label="Profile summary">
      <div className="portrait-wrap">
        {profile.photoUrl ? (
          <img className="portrait" src={profile.photoUrl} alt={`${profile.name} portrait`} />
        ) : (
          <div className="portrait portrait-placeholder" aria-label={`${profile.name} initials`}>
            {initials}
          </div>
        )}
      </div>

      <div className="profile-copy">
        <h1>{profile.name}</h1>
        <p className="profile-title">{profile.title}</p>
        <p className="profile-affiliation">{profile.affiliation}</p>
      </div>

      <div className="profile-meta">
        <span>
          <FaMapMarkerAlt aria-hidden="true" />
          {profile.location}
        </span>
        <a href={`mailto:${profile.email}`}>
          <FaEnvelope aria-hidden="true" />
          {profile.email}
        </a>
      </div>

      <div className="social-links" aria-label="Social links">
        {profile.socials.map((social) => {
          const Icon = socialIcons[social.kind];

          return (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              <Icon aria-hidden="true" />
              <span>{social.label}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
