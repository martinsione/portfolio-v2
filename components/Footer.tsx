import ExternalLink from "@/components/ExternalLink";
import { SOCIAL_LINKS } from "@/constants/links";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mt-16 mb-8">
      <div className="flex space-x-4 mb-4">
        <ExternalLink
          aria-label="linkedin"
          className="text-xl"
          href={SOCIAL_LINKS.linkedin}
        >
          <FaLinkedin />
        </ExternalLink>
        <ExternalLink
          aria-label="github"
          className="text-xl"
          href={SOCIAL_LINKS.github}
        >
          <FaGithub />
        </ExternalLink>
        <ExternalLink
          aria-label="mail"
          className="text-xl"
          href={`mailto:${SOCIAL_LINKS.mail}`}
        >
          <FiMail />
        </ExternalLink>
      </div>
      <ExternalLink className="text-sm" href={SOCIAL_LINKS.resume}>
        /resume
      </ExternalLink>
    </footer>
  );
}
