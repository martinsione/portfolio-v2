import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface Links {
  name: string;
  url: string;
}

const NAV_LINKS: Array<Links> = [
  { name: "About", url: "/about" },
  { name: "Home", url: "/" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // next-themes need to be mounted before being used
  useEffect(() => setMounted(true), []);

  const router = useRouter();

  return (
    <nav className="sticky top-0 flex justify-between items-center text-lg z-50 px-8 py-4 my-4 md:my-8 bg-white dark:bg-black">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="flex justify-center items-center rounded bg-gray-200 dark:bg-gray-800 p-3"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {mounted && (resolvedTheme === "dark" ? <FaSun /> : <FaMoon />)}
      </button>
      <div>
        {NAV_LINKS.map((link, index: number) => (
          <Link key={index} href={link.url}>
            <a
              className={`pl-4 ${
                router.asPath === link.url
                  ? "font-semibold text-gray-900 dark:text-gray-100"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              }`}
            >
              {link.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
