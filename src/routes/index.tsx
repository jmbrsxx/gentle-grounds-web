import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImg from "@/assets/cafe-hero.jpg";
import { Coffee, Croissant, Leaf } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maple & Bean Café — Slow coffee, warm welcomes" },
      { name: "description", content: "A cozy neighborhood café serving specialty coffee, fresh pastries, and seasonal lunch in Riverside." },
      { property: "og:title", content: "Maple & Bean Café" },
      { property: "og:description", content: "Slow coffee, fresh pastries, warm welcomes." },
    ],
  }),
  component: Index,
});

const popular = [
  { name: "Honey Oat Latte", desc: "Espresso, oat milk, a touch of wildflower honey.", price: "$5.20" },
  { name: "Almond Croissant", desc: "Flaky, golden, baked fresh every morning.", price: "$4.00" },
  { name: "Avocado Toast", desc: "Sourdough, smashed avocado, chili & lemon.", price: "$8.50" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" width={1536} height={1024} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>
        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl items-center px-4 py-20">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
              <Leaf className="h-3.5 w-3.5" /> Locally roasted, slowly brewed
            </span>
            <h1 className="mt-5 font-serif text-5xl leading-tight text-foreground md:text-6xl">
              A quiet corner for <span className="text-primary">good coffee</span>.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Maple & Bean is a small café in Riverside, pouring carefully sourced espresso and baking
              everything in-house. Stay a while — we saved you a seat.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105">
                See the menu
              </Link>
              <Link to="/contact" className="rounded-full border border-border bg-background/80 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                Find us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Coffee, title: "Specialty coffee", text: "Single-origin beans, roasted in small batches." },
            { icon: Croissant, title: "Baked daily", text: "Pastries and bread, made fresh each morning." },
            { icon: Leaf, title: "Plant-friendly", text: "Oat, almond, and soy — always free." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)]">
              <f.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-4 font-serif text-xl text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-serif text-4xl text-foreground">Loved by regulars</h2>
              <p className="mt-2 text-muted-foreground">A few favorites from the bar and the bakery case.</p>
            </div>
            <Link to="/menu" className="hidden text-sm font-medium text-primary hover:underline md:inline">
              Full menu →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {popular.map((item) => (
              <div key={item.name} className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
                  <span className="text-sm font-medium text-primary">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
