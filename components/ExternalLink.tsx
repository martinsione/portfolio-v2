export default function ExternalLink({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
