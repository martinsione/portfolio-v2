import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
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
    className="flex items-center justify-center rounded bg-gray-100 dark:bg-gray-900 px-4 md:px-10 py-2 mx-2"
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

  const handleClick = () => setToggle(toggle === false ? true : false);

  return (
    <>
      <div
        className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 mb-4"
        onClick={handleClick}
      >
        <div className="flex justify-between text-xl font-semibold">
          <h4>{title}</h4>
          <button className="text-2xl">
            {toggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>

      {toggle && (
        <>
          {img && (
            <span className="flex flex-col rounded-xl overflow-hidden mb-4">
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
            {url && <ExLink name="Deploy" href={url} logo={<IoLogoVercel />} />}
            {repo && <ExLink name="Github" href={repo} logo={<FaGithub />} />}
          </div>
        </>
      )}
      <div className="border border-gray-200 dark:border-gray-800 my-6"></div>
    </>
  );
}
