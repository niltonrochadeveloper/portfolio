"use client";

type ScrollLinkProps = {
  targetId: string;
  className?: string;
  children: React.ReactNode;
};

export function ScrollLink({
  targetId,
  className,
  children,
}: Readonly<ScrollLinkProps>) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
