import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Maple & Bean Café" },
      { name: "description", content: "Breakfast, lunch, drinks and desserts at Maple & Bean Café." },
      { property: "og:title", content: "Menu — Maple & Bean" },
      { property: "og:description", content: "Breakfast, lunch, drinks and desserts." },
    ],
  }),
  component: Menu,
});

const sections = [
  {
    title: "Breakfast",
    items: [
      { name: "Buttered sourdough", desc: "Cultured butter, sea salt", price: "$4.50" },
      { name: "Almond croissant", desc: "Flaky, golden, baked fresh", price: "$4.00" },
      { name: "Granola bowl", desc: "House granola, yogurt, berries", price: "$7.50" },
      { name: "Avocado toast", desc: "Sourdough, chili, lemon", price: "$8.50" },
    ],
  },
  {
    title: "Lunch",
    items: [
      { name: "Roasted veg sandwich", desc: "Pesto, mozzarella, ciabatta", price: "$10.00" },
      { name: "Soup of the day", desc: "Ask your barista", price: "$7.00" },
      { name: "Garden salad", desc: "Greens, herbs, lemon vinaigrette", price: "$9.50" },
      { name: "Quiche Lorraine", desc: "Buttery crust, served warm", price: "$8.00" },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Espresso", desc: "Single origin, rotating", price: "$3.20" },
      { name: "Cappuccino", desc: "Velvety, balanced", price: "$4.50" },
      { name: "Honey oat latte", desc: "House favorite", price: "$5.20" },
      { name: "Matcha", desc: "Ceremonial grade", price: "$5.00" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Brown butter cookie", desc: "Sea salt finish", price: "$3.50" },
      { name: "Lemon tart", desc: "Buttery, bright", price: "$5.50" },
      { name: "Chocolate cake", desc: "Dark, fudgy slice", price: "$6.00" },
      { name: "Cheesecake", desc: "Vanilla bean, graham", price: "$6.00" },
    ],
  },
];

function Menu() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Today's menu</span>
          <h1 className="mt-3 font-serif text-5xl text-foreground">From the bar & bakery.</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Made fresh, served simply. Vegan and gluten-free options available — just ask.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-8">
              <h2 className="border-b border-border pb-4 font-serif text-2xl text-primary">{s.title}</h2>
              <ul className="mt-4 divide-y divide-border">
                {s.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between py-4">
                    <div className="pr-4">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <span className="whitespace-nowrap font-medium text-primary">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
