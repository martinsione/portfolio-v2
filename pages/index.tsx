import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <Layout>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
        Hey, I’m Martin Sione
      </h1>
      <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
        I’m a frontend developer, javascript and react enthusiast. Currently
        studing computer science.
      </h2>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mt-8 mb-4">
        Projects
      </h3>
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
        url="https://fordev.vercel.app/"
        repo="https://github.com/martinsione/fordev"
      />
      <ProjectCard
        title="Job Finder"
        description='This was my first "serious" project, it was made for a UTN web development course. It is an app to find a job, built using sequelize and handlebars as a templating engine'
        repo="https://github.com/martinsione/job-finder"
      />
    </Layout>
  );
}
