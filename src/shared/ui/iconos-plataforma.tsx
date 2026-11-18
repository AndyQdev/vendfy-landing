import { Globe } from "lucide-react";

type P = { className?: string };

export function IconoWindows({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M3 4.6 10.3 3.6v7.1H3zM11.2 3.5 21 2v8.7h-9.8zM3 11.6h7.3v7.1L3 17.7zM11.2 11.6H21V20.3l-9.8-1.4z" />
    </svg>
  );
}

export function IconoAndroid({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.5 9.2 19 6.6a.4.4 0 1 0-.7-.4l-1.5 2.6A9.3 9.3 0 0 0 12 7.8c-1.7 0-3.3.4-4.8 1L5.7 6.2a.4.4 0 1 0-.7.4l1.5 2.6A8.6 8.6 0 0 0 2 16h20a8.6 8.6 0 0 0-4.5-6.8ZM7.5 13.3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm9 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    </svg>
  );
}

export function IconoApple({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.6a4.5 4.5 0 0 0-3.5-1.9c-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8A4.7 4.7 0 0 0 4.2 9.6c-1.7 2.9-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.1-1.2 2.9-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.5-1-2.5-3.9ZM14 5.5A4.3 4.3 0 0 0 15 2.4a4.4 4.4 0 0 0-2.9 1.5 4.1 4.1 0 0 0-1 3c1.1.1 2.2-.6 2.9-1.4Z" />
    </svg>
  );
}

export function IconoWeb({ className }: P) {
  return <Globe className={className} aria-hidden="true" strokeWidth={1.8} />;
}
