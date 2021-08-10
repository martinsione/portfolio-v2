import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { NAV_LINKS } from "@/constants/links";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const router = useRouter();

  return (
    <nav className="sticky top-0 flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black text-lg">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="flex items-center justify-center rounded bg-gray-200 dark:bg-gray-800 h-10 w-10"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {mounted && (resolvedTheme === "dark" ? <FaSun /> : <FaMoon />)}
      </button>
      <div>
        {NAV_LINKS.map((link, index: number) => (
          <Link key={index} href={link.url}>
            <a
              className={`pl-4 hover:text-gray-900 dark:hover:text-gray-100 ${
                router.asPath === link.url
                  ? "font-semibold text-gray-900 dark:text-gray-100"
                  : "text-gray-600 dark:text-gray-400"
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
