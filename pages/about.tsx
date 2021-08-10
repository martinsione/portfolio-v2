import Layout from "@/components/Layout";
import Timeline from "@/components/Timeline";
import { timeline } from "@/constants/timeline.config";

export default function about() {
  return (
    <Layout title="About">
      <Timeline title="Timeline" timeline={timeline} />
    </Layout>
  );
}
