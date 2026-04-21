import { useState } from "react";

const APPETIZER_IMG = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/d5b9651d-d7ab-4343-b782-d98187a7989c.jpg";
const MAIN_IMG = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/63cdb813-6831-4ef5-bcb6-1a4a1c3f341a.jpg";
const DESSERT_IMG = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/8b7660e9-00fc-41ac-bce7-4c6f8498fd70.jpg";
const DRINK_IMG = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/053e9791-db92-4253-8fb3-bf5480d8f34d.jpg";

type Category =
  | "all"
  | "salads"
  | "mains"
  | "bbq"
  | "sandwiches"
  | "sides"
  | "cold"
  | "desserts"
  | "tea"
  | "beer_snacks"
  | "beer"
  | "soft"
  | "coffee";

interface Dish {
  id: number;
  name: string;
  price: string;
  category: Exclude<Category, "all">;
  image: string;
  weight?: string;
}

const dishes: Dish[] = [
  // Салаты
  { id: 1, name: "Оливье", price: "250 ₽", category: "salads", image: APPETIZER_IMG },
  { id: 2, name: "Винегрет", price: "250 ₽", category: "salads", image: APPETIZER_IMG },

  // Вторые блюда
  { id: 10, name: "Мясо по-французски", price: "350 / 500 ₽", category: "mains", image: MAIN_IMG },
  { id: 11, name: "Пельмени с бульоном", price: "250 ₽", category: "mains", image: MAIN_IMG },
  { id: 12, name: "Пельмени", price: "200 ₽", category: "mains", image: MAIN_IMG },
  { id: 13, name: "Колбаски", price: "300 ₽", category: "mains", image: MAIN_IMG },

  // Шашлык
  { id: 20, name: "Свинина", price: "450 ₽", category: "bbq", image: MAIN_IMG },
  { id: 21, name: "Крылышки", price: "400 ₽", category: "bbq", image: MAIN_IMG },
  { id: 22, name: "Люля-кебаб", price: "550 ₽", category: "bbq", image: MAIN_IMG },

  // Бутерброды
  { id: 30, name: "С ветчиной", price: "200 ₽ / шт", category: "sandwiches", image: APPETIZER_IMG },
  { id: 31, name: "С колбасой", price: "200 ₽ / шт", category: "sandwiches", image: APPETIZER_IMG },
  { id: 32, name: "Соус сырный", price: "100 ₽ / шт", category: "sandwiches", image: APPETIZER_IMG },
  { id: 33, name: "Соус чесночный", price: "100 ₽ / шт", category: "sandwiches", image: APPETIZER_IMG },

  // Гарниры
  { id: 40, name: "Картофель фри", price: "250 ₽", category: "sides", image: MAIN_IMG, weight: "150 г" },
  { id: 41, name: "Фри в шарах", price: "300 ₽", category: "sides", image: MAIN_IMG, weight: "150 г" },

  // Холодные закуски
  { id: 50, name: "Мясное ассорти", price: "450 ₽", category: "cold", image: APPETIZER_IMG },
  { id: 51, name: "Овощное ассорти", price: "350 ₽", category: "cold", image: APPETIZER_IMG },
  { id: 52, name: "Разносолы", price: "350 ₽", category: "cold", image: APPETIZER_IMG },
  { id: 53, name: "Капуста «Сибирская»", price: "250 ₽", category: "cold", image: APPETIZER_IMG },
  { id: 54, name: "Лимон (нарезка)", price: "100 ₽", category: "cold", image: APPETIZER_IMG },
  { id: 55, name: "Сельдь с отварным картофелем", price: "400 ₽", category: "cold", image: APPETIZER_IMG },

  // Десерты
  { id: 60, name: "Яблоко", price: "100 ₽", category: "desserts", image: DESSERT_IMG, weight: "100 г" },
  { id: 61, name: "Груша", price: "150 ₽", category: "desserts", image: DESSERT_IMG, weight: "100 г" },
  { id: 62, name: "Апельсин", price: "100 ₽", category: "desserts", image: DESSERT_IMG, weight: "100 г" },
  { id: 63, name: "Мандарин", price: "100 ₽", category: "desserts", image: DESSERT_IMG, weight: "100 г" },
  { id: 64, name: "Виноград", price: "150 ₽", category: "desserts", image: DESSERT_IMG, weight: "100 г" },
  { id: 65, name: "Банан", price: "100 ₽", category: "desserts", image: DESSERT_IMG, weight: "100 г" },

  // К чаю
  { id: 70, name: "Блинчики", price: "200 ₽", category: "tea", image: DESSERT_IMG, weight: "3 шт" },
  { id: 71, name: "Сгущёнка", price: "100 ₽", category: "tea", image: DESSERT_IMG },
  { id: 72, name: "Мёд", price: "100 ₽", category: "tea", image: DESSERT_IMG },
  { id: 73, name: "Джем", price: "100 ₽", category: "tea", image: DESSERT_IMG },
  { id: 74, name: "Сметана", price: "100 ₽", category: "tea", image: DESSERT_IMG },
  { id: 75, name: "Шоколад плиточный", price: "250 ₽", category: "tea", image: DESSERT_IMG },
  { id: 76, name: "Сникерс", price: "150 / 250 ₽", category: "tea", image: DESSERT_IMG },
  { id: 77, name: "Марс", price: "150 / 250 ₽", category: "tea", image: DESSERT_IMG },
  { id: 78, name: "Баунти", price: "150 / 250 ₽", category: "tea", image: DESSERT_IMG },
  { id: 79, name: "Твикс", price: "150 / 250 ₽", category: "tea", image: DESSERT_IMG },

  // К пиву
  { id: 80, name: "Арахис", price: "200 ₽", category: "beer_snacks", image: DRINK_IMG, weight: "100 г" },
  { id: 81, name: "Кириешки", price: "200 ₽", category: "beer_snacks", image: DRINK_IMG, weight: "100 г" },
  { id: 82, name: "Рыба", price: "400 ₽", category: "beer_snacks", image: DRINK_IMG, weight: "100 г" },
  { id: 83, name: "Кальмар", price: "400 ₽", category: "beer_snacks", image: DRINK_IMG, weight: "100 г" },
  { id: 84, name: "Сыр (косичка)", price: "400 ₽", category: "beer_snacks", image: DRINK_IMG, weight: "100 г" },
  { id: 85, name: "Сыр (хворост)", price: "400 ₽", category: "beer_snacks", image: DRINK_IMG, weight: "100 г" },
  { id: 86, name: "Пивная тарелка", price: "1 500 ₽", category: "beer_snacks", image: DRINK_IMG, weight: "500 г" },

  // Пиво
  { id: 90, name: "Безалкогольное пиво", price: "220 ₽", category: "beer", image: DRINK_IMG },
  { id: 91, name: "Tuborg", price: "250 ₽", category: "beer", image: DRINK_IMG },
  { id: 92, name: "Жатецкий гусь", price: "250 ₽", category: "beer", image: DRINK_IMG },
  { id: 93, name: "Чешское", price: "250 ₽", category: "beer", image: DRINK_IMG },
  { id: 94, name: "Немецкое", price: "250 ₽", category: "beer", image: DRINK_IMG },
  { id: 95, name: "Weiss Berg", price: "250 ₽", category: "beer", image: DRINK_IMG },
  { id: 96, name: "Kozel (тёмный / светлый)", price: "250 ₽", category: "beer", image: DRINK_IMG },
  { id: 97, name: "Beaver", price: "250 ₽", category: "beer", image: DRINK_IMG },
  { id: 98, name: "Чешское разливное", price: "250 ₽", category: "beer", image: DRINK_IMG },
  { id: 99, name: "Немецкое разливное", price: "250 ₽", category: "beer", image: DRINK_IMG },

  // Безалкогольные напитки
  { id: 100, name: "Сок", price: "100 / 300 ₽", category: "soft", image: DRINK_IMG, weight: "стакан / литр" },
  { id: 101, name: "Red Bull", price: "250 ₽", category: "soft", image: DRINK_IMG },
  { id: 102, name: "Adrenalin", price: "250 ₽", category: "soft", image: DRINK_IMG },
  { id: 103, name: "XELL", price: "200 ₽", category: "soft", image: DRINK_IMG },
  { id: 104, name: "Coca-Cola", price: "200 / 250 ₽", category: "soft", image: DRINK_IMG, weight: "пластик / стекло" },
  { id: 105, name: "Лимонад", price: "200 ₽", category: "soft", image: DRINK_IMG },
  { id: 106, name: "Вода", price: "100 ₽", category: "soft", image: DRINK_IMG },
  { id: 107, name: "Завьяловская", price: "200 ₽", category: "soft", image: DRINK_IMG },
  { id: 108, name: "Ессентуки", price: "200 ₽", category: "soft", image: DRINK_IMG },
  { id: 109, name: "Кружка чая", price: "80 / 100 ₽", category: "soft", image: DRINK_IMG },
  { id: 110, name: "Чайник чая", price: "250 / 300 / 350 / 400 ₽", category: "soft", image: DRINK_IMG },

  // Кофе
  { id: 120, name: "Кофе растворимый", price: "80 ₽", category: "coffee", image: DRINK_IMG },
  { id: 121, name: "Американо", price: "150 ₽", category: "coffee", image: DRINK_IMG },
  { id: 122, name: "Капучино", price: "180 ₽", category: "coffee", image: DRINK_IMG },
];

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "Всё меню" },
  { id: "salads", label: "Салаты" },
  { id: "mains", label: "Вторые блюда" },
  { id: "bbq", label: "Шашлык" },
  { id: "sandwiches", label: "Бутерброды" },
  { id: "sides", label: "Гарниры" },
  { id: "cold", label: "Холодные закуски" },
  { id: "desserts", label: "Десерты" },
  { id: "tea", label: "К чаю" },
  { id: "beer_snacks", label: "К пиву" },
  { id: "beer", label: "Пиво" },
  { id: "soft", label: "Напитки" },
  { id: "coffee", label: "Кофе" },
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
          <nav className="flex gap-6 overflow-x-auto py-4 pb-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilter(cat.id)}
                className={`filter-btn whitespace-nowrap text-xs tracking-wider uppercase pb-1 transition-colors ${
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
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-cormorant text-2xl font-light leading-tight text-foreground">
                    {dish.name}
                  </h2>
                  <span className="font-cormorant text-xl font-light text-foreground whitespace-nowrap">
                    {dish.price}
                  </span>
                </div>
                {dish.weight && (
                  <p className="mt-2 text-xs tracking-widest uppercase text-muted-foreground/60">
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
              Нет позиций в этой категории
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-cormorant text-lg italic text-muted-foreground">
            Все цены указаны в рублях
          </p>
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            Приятного аппетита
          </p>
        </div>
      </footer>
    </div>
  );
}
