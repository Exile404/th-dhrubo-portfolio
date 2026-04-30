import { PROFILE } from "@/lib/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/30 px-6 py-10 text-center">
      <p className="font-dm text-sm text-foreground/30">
        © {new Date().getFullYear()} {PROFILE.name}. Crafted with precision.
      </p>
    </footer>
  );
}