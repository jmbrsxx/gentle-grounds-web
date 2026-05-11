import { Link } from "@tanstack/react-router";
import { Coffee, Instagram, Facebook, Twitter, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2 font-serif text-lg font-semibold text-primary">
            <Coffee className="h-5 w-5" />
            Maple & Bean
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            A neighborhood café serving slow-brewed coffee, fresh pastries, and warm welcomes.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Visit</h4>
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4" />
            42 Maple Street, Riverside<br />Open 7am – 7pm daily
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Follow</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Maple & Bean Café. Made with care.
      </div>
    </footer>
  );
}
