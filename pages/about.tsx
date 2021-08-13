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
          Hey, I&apos;m Martin. I&apos;m a frontend developer, currently working
          mostly with javascript and react.
        </p>
        <p>
          Since I was a child I knew my goal was to became a software engineer
          🧑🏽‍🔬. In 2020 due to the pandemic I had a lot of free time at home,
          so I decided it was time for me to start coding.
        </p>
        <p>
          Currently I&apos;m studing Computer Science 🖥️ in UNL (National
          University of Litoral) and I&apos;m really liking it so far, I&apos;m
          on my first year and I&apos;m sure there&apos;s lot to learn 👨🏽‍🏫.
        </p>
        <p>
          I grew up in small-town Parana, Argentina. I graduated High School in
          2020. I spend my free time playing music 🎧, soccer ⚽ and enjoying
          time with friends and family.
        </p>
      </div>

      <h3 className="font-bold tracking-tight text-2xl md:text-4xl mb-4">
        Timeline
      </h3>

      <Timeline timeline={timeline} />
    </Layout>
  );
}
