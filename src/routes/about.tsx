import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heart, Sprout, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maple & Bean Café" },
      { name: "description", content: "Our story, our values, and the people behind Maple & Bean Café." },
      { property: "og:title", content: "About Maple & Bean" },
      { property: "og:description", content: "A small café with a slow-coffee philosophy." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-3xl px-4 py-20">
        <span className="text-sm font-medium uppercase tracking-widest text-accent">Our story</span>
        <h1 className="mt-3 font-serif text-5xl text-foreground">A café built on slow mornings.</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Maple & Bean opened in the spring of 2018 on a quiet corner of Maple Street.
          What began as a two-person espresso bar has grown into a neighborhood gathering
          place — but the idea hasn't changed. Pour good coffee, bake honest pastries,
          and make space for people to sit a while.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          We work directly with a handful of small roasters, change the menu with the
          seasons, and try to keep things kind — to growers, to staff, and to the people
          across the counter.
        </p>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-3xl text-foreground">What we believe</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { icon: Heart, title: "Hospitality first", text: "Every cup begins with a real hello." },
              { icon: Sprout, title: "Sourced with care", text: "Fair-trade beans, local dairy, seasonal produce." },
              { icon: Users, title: "Community space", text: "A place to meet, work, or simply pause." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl bg-card p-6">
                <v.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 font-serif text-xl text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
