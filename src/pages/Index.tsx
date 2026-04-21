import { useState } from "react";

const APPETIZER_IMG = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/d5b9651d-d7ab-4343-b782-d98187a7989c.jpg";
const MAIN_IMG = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/63cdb813-6831-4ef5-bcb6-1a4a1c3f341a.jpg";
const DESSERT_IMG = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/8b7660e9-00fc-41ac-bce7-4c6f8498fd70.jpg";
const DRINK_IMG = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/053e9791-db92-4253-8fb3-bf5480d8f34d.jpg";

type Category = "all" | "appetizers" | "mains" | "desserts" | "drinks";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Exclude<Category, "all">;
  image: string;
  weight?: string;
}

const dishes: Dish[] = [
  {
    id: 1,
    name: "Брускетта с томатами",
    description: "Хрустящий хлеб на гриле, томаты черри, базилик, оливковое масло первого отжима",
    price: 490,
    category: "appetizers",
    image: APPETIZER_IMG,
    weight: "180 г",
  },
  {
    id: 2,
    name: "Карпаччо из говядины",
    description: "Тончайшие ломтики мраморной говядины, руккола, пармезан, каперсы, лимонный соус",
    price: 890,
    category: "appetizers",
    image: APPETIZER_IMG,
    weight: "120 г",
  },
  {
    id: 3,
    name: "Тартар из лосося",
    description: "Свежий лосось, авокадо, огурец, икра тобико, соус юзу",
    price: 750,
    category: "appetizers",
    image: APPETIZER_IMG,
    weight: "150 г",
  },
  {
    id: 4,
    name: "Стейк из лосося",
    description: "Лосось на гриле, спаржа, картофельное пюре, соус с белым вином и эстрагоном",
    price: 1490,
    category: "mains",
    image: MAIN_IMG,
    weight: "280 г",
  },
  {
    id: 5,
    name: "Утиная грудка",
    description: "Утка конфи, чечевица, морковное пюре, апельсиновый соус",
    price: 1690,
    category: "mains",
    image: MAIN_IMG,
    weight: "300 г",
  },
  {
    id: 6,
    name: "Ризотто с трюфелем",
    description: "Арборио, трюфельное масло, пармезан, лесные грибы, тёртый трюфель",
    price: 1290,
    category: "mains",
    image: MAIN_IMG,
    weight: "320 г",
  },
  {
    id: 7,
    name: "Шоколадный фондан",
    description: "Тёплый шоколадный бисквит, ванильное мороженое, малиновый соус",
    price: 590,
    category: "desserts",
    image: DESSERT_IMG,
    weight: "160 г",
  },
  {
    id: 8,
    name: "Тирамису",
    description: "Классический итальянский десерт, маскарпоне, кофейная пропитка, какао",
    price: 490,
    category: "desserts",
    image: DESSERT_IMG,
    weight: "200 г",
  },
  {
    id: 9,
    name: "Крем-брюле",
    description: "Ванильный заварной крем, карамельная корочка, свежие ягоды",
    price: 450,
    category: "desserts",
    image: DESSERT_IMG,
    weight: "150 г",
  },
  {
    id: 10,
    name: "Авторский коктейль",
    description: "Джин, лимонный вермут, огурец, тоник, свежий базилик",
    price: 690,
    category: "drinks",
    image: DRINK_IMG,
    weight: "200 мл",
  },
  {
    id: 11,
    name: "Свежевыжатые соки",
    description: "Апельсиновый, грейпфрутовый или морковно-имбирный",
    price: 390,
    category: "drinks",
    image: DRINK_IMG,
    weight: "300 мл",
  },
  {
    id: 12,
    name: "Фирменный лимонад",
    description: "Лимон, мята, имбирь, газированная вода, тростниковый сахар",
    price: 350,
    category: "drinks",
    image: DRINK_IMG,
    weight: "400 мл",
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "appetizers", label: "Закуски" },
  { id: "mains", label: "Основные блюда" },
  { id: "desserts", label: "Десерты" },
  { id: "drinks", label: "Напитки" },
];

export default function Index() {
  const [active, setActive] = useState<Category>("all");
  const [animating, setAnimating] = useState(false);

  const filtered = active === "all" ? dishes : dishes.filter((d) => d.category === active);

  const handleFilter = (cat: Category) => {
    if (cat === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(cat);
      setAnimating(false);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-montserrat tracking-[0.3em] text-muted-foreground uppercase mb-2">
              Бильярдный клуб
            </p>
            <h1 className="font-cormorant text-5xl font-light text-foreground leading-none">
              7 Луза
            </h1>
          </div>
          <p className="font-cormorant text-lg italic text-muted-foreground hidden md:block">
            Меню · Бар · Кухня
          </p>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="sticky top-0 z-10 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex gap-8 overflow-x-auto py-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilter(cat.id)}
                className={`filter-btn whitespace-nowrap text-sm tracking-wider uppercase pb-1 transition-colors ${
                  active === cat.id
                    ? "active text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Dishes Grid */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border transition-opacity duration-200 ${
            animating ? "opacity-0" : "opacity-100"
          }`}
        >
          {filtered.map((dish, i) => (
            <article
              key={dish.id}
              className="card-hover bg-white group cursor-default"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-cormorant text-2xl font-light leading-tight text-foreground">
                    {dish.name}
                  </h2>
                  <span className="font-cormorant text-xl font-light text-foreground whitespace-nowrap">
                    {dish.price} ₽
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {dish.description}
                </p>
                {dish.weight && (
                  <p className="mt-4 text-xs tracking-widest uppercase text-muted-foreground/60">
                    {dish.weight}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-cormorant text-3xl text-muted-foreground font-light">
              Нет блюд в этой категории
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-cormorant text-lg italic text-muted-foreground">
            Все цены указаны в рублях, включая НДС
          </p>
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            Приятного аппетита
          </p>
        </div>
      </footer>
    </div>
  );
}