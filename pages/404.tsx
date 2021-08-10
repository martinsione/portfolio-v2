import Link from "next/link";

import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout title="404">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 md:mb-12">
          404 - Page not found
        </h1>
        <Link href="/">
          <a className="px-20 py-4 md:text-lg rounded font-bold bg-gray-100 dark:bg-gray-900">
            Return Home
          </a>
        </Link>
      </div>
    </Layout>
  );
}