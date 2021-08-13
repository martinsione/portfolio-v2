import Image from "next/image";
import { useState, useRef } from "react";
import { FaGithub, FaPlay, FaChevronDown } from "react-icons/fa";
import ExternalLink from "@/components/ExternalLink";

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
    className="flex items-center rounded bg-gray-100 dark:bg-gray-900 py-2 px-4 md:px-10 mx-2"
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
  img?: string;
  url?: string;
  repo?: string;
}) {
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState("0px");
  const content = useRef("0px");
  const handleClick = () => {
    setToggle(toggle === false ? true : false);
    setHeight(toggle === false ? `${content.current.scrollHeight}px` : "0px");
  };

  return (
    <div className="border rounded  hover:shadow-md dark:hover:border-gray-200 py-2 px-3 mb-4">
      <div className="cursor-pointer" onClick={handleClick}>
        <div className="flex justify-between text-xl font-semibold">
          <h4 className="text-xl">{title}</h4>
          <button
            className={`text-2xl duration-500 ${toggle && "-rotate-180"}`}
          >
            <FaChevronDown />
          </button>
        </div>
        <p>{description}</p>
      </div>

      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden transition-all duration-500"
      >
        {img && (
          <span className="flex flex-col rounded overflow-hidden mb-4">
            <Image
              width="192"
              height="108"
              layout="responsive"
              objectFit="contain"
              src={img}
              alt={description}
            />
          </span>
        )}
        <div className="flex flex-row justify-center">
          {url && <ExLink name="Demo" href={url} logo={<FaPlay />} />}
          {repo && <ExLink name="Github" href={repo} logo={<FaGithub />} />}
        </div>
      </div>
    </div>
  );
}
