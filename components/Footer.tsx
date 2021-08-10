import { SOCIAL_LINKS } from "@/constants/links";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ExternalLink = ({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
}) => (
  <a
    className={`${className} text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-200`}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mb-8">
      <div className="flex space-x-4 mb-4">
        <ExternalLink className="text-xl" href={SOCIAL_LINKS.linkedin}>
          <FaLinkedin />
        </ExternalLink>
        <ExternalLink className="text-xl" href={SOCIAL_LINKS.github}>
          <FaGithub />
        </ExternalLink>
        <ExternalLink className="text-xl" href={`mailto:${SOCIAL_LINKS.mail}`}>
          <FiMail />
        </ExternalLink>
      </div>
      <ExternalLink className="text-sm" href={SOCIAL_LINKS.resume}>
        /resume
      </ExternalLink>
    </footer>
  );
}
