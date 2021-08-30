import Layout from "@/components/Layout";
import Timeline from "@/components/Timeline";
import { timeline } from "@/constants/timeline.config";

export default function about() {
  return (
    <Layout title="About">
      <h1 className="font-bold tracking-tight text-3xl md:text-5xl mb-4">
        About Me
      </h1>
      <div className="prose md:prose-lg mb-16">
        <p>
          Hi, I&apos;m Martin and I&apos;m 18 years old. I&apos;m a self-taught
          software engineer looking for my first job as a frontend developer 👨🏽‍🏫.
          Currently I&apos;m studing Computer Science 🖥️ at Universidad Nacional
          del Litoral.
        </p>
        <p>
          I&apos;m an analitic and introvert person willing to learn something
          new everyday. I believe in respect and good communication between
          teams.
        </p>
        <p>
          I grew up in small-town Parana, Argentina. I spend my free time
          playing music 🎧, soccer ⚽ and enjoying time with friends and family.
        </p>
      </div>

      <h3 className="font-bold tracking-tight text-2xl md:text-4xl mb-4">
        Timeline
      </h3>

      <Timeline timeline={timeline} />
    </Layout>
  );
}
