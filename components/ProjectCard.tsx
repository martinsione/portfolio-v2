import ExternalLink from "@/components/ExternalLink";
import Image from "next/image";
import { FaGithub, FaPlay } from "react-icons/fa";

const ExLink = ({
  href,
  name,
  logo,
}: {
  href: string;
  name: string;
  logo: React.ReactFragment;
}) => (
  <ExternalLink
    className="flex justify-center items-center rounded w-full bg-gray-100 dark:bg-gray-900 py-2 px-4 mx-1"
    href={href}
  >
    {name}
    <span className="ml-2">{logo}</span>
  </ExternalLink>
);

export default function ProjectCard({
  title,
  description,
  img,
  url,
  repo,
}: {
  title: string;
  description: string;
  img: string;
  url?: string;
  repo?: string;
}) {
  return (
    <div className="md:flex flex-row items-start mb-16">
      <figure className="rounded-lg overflow-hidden shadow-md w-full mb-4">
        <Image
          width="192"
          height="108"
          objectFit="contain"
          layout="responsive"
          src={img}
          alt={description}
        />
      </figure>
      <div className="md:px-5">
        <h4 className="font-bold text-xl md:text-2xl mb-2">{title}</h4>
        <p className="prose md:prose-lg mb-2">{description}</p>
        <div className="flex">
          {url && <ExLink name="Demo" href={url} logo={<FaPlay />} />}
          {repo && <ExLink name="Github" href={repo} logo={<FaGithub />} />}
        </div>
      </div>
    </div>
  );
}
