export default function ExternalLink({
  className,
  href,
  children,
  disabled,
}: {
  className?: string;
  disabled?: boolean;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={`${className} text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-200`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
