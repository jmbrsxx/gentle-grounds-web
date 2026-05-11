import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maple & Bean Café" },
      { name: "description", content: "Visit, call, or message Maple & Bean Café in Riverside." },
      { property: "og:title", content: "Contact Maple & Bean" },
      { property: "og:description", content: "Find us at 42 Maple Street, Riverside." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Say hello</span>
          <h1 className="mt-3 font-serif text-5xl text-foreground">Come on in.</h1>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* Info */}
          <div className="space-y-5">
            {[
              { icon: MapPin, label: "Address", value: "42 Maple Street, Riverside" },
              { icon: Phone, label: "Phone", value: "(555) 234-9087" },
              { icon: Mail, label: "Email", value: "hello@mapleandbean.cafe" },
              { icon: Clock, label: "Hours", value: "Open daily, 7am – 7pm" },
            ].map((row) => (
              <div key={row.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="rounded-full bg-secondary/60 p-3 text-secondary-foreground">
                  <row.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{row.label}</p>
                  <p className="mt-1 text-foreground">{row.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <h2 className="font-serif text-2xl text-foreground">Send a message</h2>
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-muted-foreground" htmlFor="name">Name</label>
                <input id="name" required className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground outline-none ring-ring/50 focus:ring-2" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground" htmlFor="email">Email</label>
                <input id="email" type="email" required className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground outline-none ring-ring/50 focus:ring-2" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground" htmlFor="msg">Message</label>
                <textarea id="msg" rows={5} required className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground outline-none ring-ring/50 focus:ring-2" />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                {sent ? "Thanks — we'll be in touch!" : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
