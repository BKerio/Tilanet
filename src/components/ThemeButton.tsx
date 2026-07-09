import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type ThemeButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'gold' | 'dark' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export default function ThemeButton({
  children,
  to,
  href,
  variant = 'gold',
  className = '',
  onClick,
  type = 'button',
}: ThemeButtonProps) {
  const base = `btn-theme ${variant === 'dark' ? 'btn-theme-dark' : ''} ${variant === 'outline' ? 'btn-theme-outline' : ''} ${className}`;

  const inner = <span className="relative z-10 flex items-center gap-2">{children}</span>;

  if (to) {
    return (
      <Link to={to} className={base}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={base}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {inner}
    </button>
  );
}
