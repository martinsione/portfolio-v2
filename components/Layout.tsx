import Head from "next/head";
import { useRouter } from "next/router";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({
  title,
  description,
  children,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const meta = {
    title: title ? `${title} | Martin Sione` : "Martin Sione",
    description: description || "Front-end developer, lifelong learner.",
    image: "https://martinsione.com/static/images/banner.png",
    type: "website",
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta
          property="og:url"
          content={`https://martinsione.com${router.asPath}`}
        />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Martin Sione" />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link
          rel="canonical"
          href={`https://martinsione.com${router.asPath}`}
        />
      </Head>
      <Navbar />
      <main className="flex flex-col justify-center px-8">
        {children}
        <Footer />
      </main>
    </>
  );
}
