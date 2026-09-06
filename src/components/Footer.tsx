import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-row gap-2 items-center min-w-screen border-t border-(--border) pt-3 pb-2 pl-5 text-sm">
      ~
      <FaRegCopyright className="relative" />
      <div className="relative">2026 - Loïc DELPRAT - All rights reserved.</div>
    </footer>
  );
}
