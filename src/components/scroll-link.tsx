"use client";

type ScrollLinkProps = {
  targetId: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function ScrollLink({
  targetId,
  className,
  children,
  onClick,
}: Readonly<ScrollLinkProps>) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClick?.();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
