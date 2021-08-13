import { SOCIAL_LINKS } from "@/constants/links";
import ExternalLink from "@/components/ExternalLink";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <Layout>
      <div className="mb-16">
        <h1 className="font-bold text-3xl md:text-5xl mb-4">
          Hey, I’m Martin Sione
        </h1>
        <h2 className="prose md:prose-lg text-gray-600 dark:text-gray-400 mb-4">
          I’m a frontend developer, javascript and react enthusiast. Currently
          studing computer science.
        </h2>
        <div className="flex flex-row">
          <ExternalLink
            className="rounded font-bold border border-black dark:border-white text-white dark:text-black border bg-black dark:bg-white hover:bg-white dark:hover:bg-black py-2 px-8 mr-4"
            href={SOCIAL_LINKS.resume}
          >
            Resume
          </ExternalLink>
          <ExternalLink
            className="rounded border font-semibold border-gray-500 dark:border-gray-400 hover:border-black dark:hover:border-white py-2 px-8"
            href={`mailto:${SOCIAL_LINKS.mail}`}
          >
            Mail
          </ExternalLink>
        </div>
      </div>
      <h3 className="font-bold text-2xl md:text-4xl mb-4 md:mb-8">Projects</h3>
      <ProjectCard
        title="Amazon Clone"
        description="This was one of my very first project with react and I'm very proud of it. It has full auth implementation with firebase."
        img="/images/projects/amazon-clone/amazon-clone-1.png"
        url="https://amazon-clone-martinsione.vercel.app/"
        repo="https://github.com/martinsione/amazon-clone"
      />
      <ProjectCard
        title="Fordev"
        description="Users can post and see what others are doing. It is built with nextjs and it has github auth implemented with firebase."
        img="/images/projects/fordev/fordev-1.png"
        url="https://fordev.vercel.app/"
        repo="https://github.com/martinsione/fordev"
      />
      {/* <ProjectCard
        title="Job Finder"
        description='This was my first "serious" project, it was made for a UTN web development course. Built using sequelize and handlebars as a templating engine '
        repo="https://github.com/martinsione/job-finder"
      /> */}
    </Layout>
  );
}
