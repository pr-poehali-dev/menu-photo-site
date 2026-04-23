import { useState } from "react";

const IMG_SALAD = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/f9b43d09-ce1d-4a66-bb3a-ce6efa47e97d.jpg";
const IMG_MAINS = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/01a28685-65a4-4678-8535-faed92e44134.jpg";
const IMG_BBQ = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/6c24ec46-714d-4791-995f-658823f638ca.jpg";
const IMG_SANDWICH = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/9ebac804-1d6e-4996-b488-dd111d218494.jpg";
const IMG_SIDES = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/d8b2cc8a-e593-43bd-a54b-05c78b33d10d.jpg";
const IMG_COLD = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/0d7b15fe-419d-42b6-8196-03a0c7ea34b0.jpg";
const IMG_DESSERT = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/a204c1b2-a3d0-4360-973b-e707d85416c5.jpg";
const IMG_TEA = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/774e9c62-c04d-4c58-9894-7942425c5cdb.jpg";
const IMG_BEER_SNACKS = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/cbbab8cf-6c7b-4422-a3c7-6d6ee83ff00e.jpg";
const IMG_BEER = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/45809b9c-a8aa-4318-9813-a9757a994fd6.jpg";
const IMG_SOFT = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/2de0c814-aaa3-49ad-8c43-b66133177a7e.jpg";
const IMG_COFFEE = "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/035f3614-5a5f-47f1-967e-8664fe059e45.jpg";

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
  { id: 1, name: "Оливье", price: "250 ₽", category: "salads", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/26e482d5-ca81-4609-8f1f-b841d01b9b86.jpg", weight: "250 г" },
  { id: 2, name: "Винегрет", price: "250 ₽", category: "salads", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/385cfdb4-f6ae-454d-aa7d-6269cb98e74b.jpg", weight: "250 г" },

  // Вторые блюда
  { id: 10, name: "Мясо по-французски", price: "350 / 500 ₽", category: "mains", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/83a7aba9-051d-4dc2-89f5-0ecd4bc9f905.jpg" },
  { id: 11, name: "Пельмени с бульоном", price: "250 ₽", category: "mains", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/2892d5d7-d32f-4c1b-8f20-0e532195650a.jpg" },
  { id: 12, name: "Пельмени", price: "200 ₽", category: "mains", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/02875ecc-ade3-4050-a098-30c6816d5aff.jpg" },
  { id: 13, name: "Колбаски", price: "300 ₽", category: "mains", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/d0c139d6-06a2-4420-a3e0-27bb822c6ccb.jpg" },

  // Шашлык
  { id: 20, name: "Свинина", price: "450 ₽", category: "bbq", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/70caa845-de8d-4644-899c-024135630298.png" },
  { id: 21, name: "Крылышки", price: "400 ₽", category: "bbq", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/855a5bfc-c7c9-446d-a351-b1bd91124349.jpg" },
  { id: 22, name: "Люля-кебаб", price: "550 ₽", category: "bbq", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/51780e7a-019c-4f24-b4f8-b2ae26420251.png" },

  // Бутерброды
  { id: 30, name: "С ветчиной", price: "200 ₽", category: "sandwiches", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/ad05c684-8fef-4f18-8531-403ec9603a32.jpg", weight: "1 шт" },
  { id: 31, name: "С колбасой", price: "200 ₽", category: "sandwiches", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/ad05c684-8fef-4f18-8531-403ec9603a32.jpg", weight: "1 шт" },
  { id: 32, name: "Соус сырный", price: "100 ₽", category: "sandwiches", image: IMG_SANDWICH, weight: "1 шт" },
  { id: 33, name: "Соус чесночный", price: "100 ₽", category: "sandwiches", image: IMG_SANDWICH, weight: "1 шт" },

  // Гарниры
  { id: 40, name: "Картофель фри", price: "250 ₽", category: "sides", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/92019da4-ed49-4a42-8a43-38ff77291890.jpg", weight: "150 г" },
  { id: 41, name: "Фри в шарах", price: "300 ₽", category: "sides", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/2b02b4ae-a8ec-4bf3-890c-a296f5da5a35.jpg", weight: "150 г" },

  // Холодные закуски
  { id: 50, name: "Мясное ассорти", price: "450 ₽", category: "cold", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/a06fb8da-831e-4550-9a57-68c948342c9c.jpg" },
  { id: 51, name: "Овощное ассорти", price: "350 ₽", category: "cold", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/8db4a68b-cc20-4034-9130-6df2b450eb24.jpg" },
  { id: 52, name: "Разносолы", price: "350 ₽", category: "cold", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/afc66afa-1ce8-4d07-807c-a50706cdd419.jpg" },
  { id: 53, name: "Капуста «Сибирская»", price: "250 ₽", category: "cold", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/a10f60f8-3457-4ef5-9226-4f2811567af5.jpg" },
  { id: 54, name: "Лимон (нарезка)", price: "100 ₽", category: "cold", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/04899b8e-de73-4a13-8c9f-c854de8f5713.jpg" },
  { id: 55, name: "Сельдь с отварным картофелем", price: "400 ₽", category: "cold", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/1d6644ae-066b-4cf9-8f17-7f3e1fa8ceae.jpg" },

  // Десерты
  { id: 60, name: "Яблоко", price: "100 ₽", category: "desserts", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/91b3e093-0a5d-4a62-bf2c-91b1785e07df.jpg", weight: "100 г" },
  { id: 61, name: "Груша", price: "150 ₽", category: "desserts", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/d6103ba1-d8b2-4e6d-ae68-346bf14db66f.jpg", weight: "100 г" },
  { id: 62, name: "Апельсин", price: "100 ₽", category: "desserts", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/91b3e093-0a5d-4a62-bf2c-91b1785e07df.jpg", weight: "100 г" },
  { id: 63, name: "Мандарин", price: "100 ₽", category: "desserts", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/91b3e093-0a5d-4a62-bf2c-91b1785e07df.jpg", weight: "100 г" },
  { id: 64, name: "Виноград", price: "150 ₽", category: "desserts", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/91b3e093-0a5d-4a62-bf2c-91b1785e07df.jpg", weight: "100 г" },
  { id: 65, name: "Банан", price: "100 ₽", category: "desserts", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/91b3e093-0a5d-4a62-bf2c-91b1785e07df.jpg", weight: "100 г" },

  // К чаю
  { id: 70, name: "Блинчики", price: "200 ₽", category: "tea", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/fef4d508-c639-47f3-91fd-df1801b19b5b.jpg", weight: "3 шт" },
  { id: 71, name: "Сгущёнка", price: "100 ₽", category: "tea", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/fef4d508-c639-47f3-91fd-df1801b19b5b.jpg" },
  { id: 72, name: "Мёд", price: "100 ₽", category: "tea", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/fef4d508-c639-47f3-91fd-df1801b19b5b.jpg" },
  { id: 73, name: "Джем", price: "100 ₽", category: "tea", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/fef4d508-c639-47f3-91fd-df1801b19b5b.jpg" },
  { id: 74, name: "Сметана", price: "100 ₽", category: "tea", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/bucket/c7cdbf01-ad86-478d-b5d1-65209b197e4f.png" },
  { id: 75, name: "Шоколад плиточный", price: "250 ₽", category: "tea", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/97d594c9-1ca8-4396-b71f-69349c04d362.jpg" },
  { id: 76, name: "Сникерс", price: "150 / 250 ₽", category: "tea", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/97d594c9-1ca8-4396-b71f-69349c04d362.jpg" },
  { id: 77, name: "Марс", price: "150 / 250 ₽", category: "tea", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/97d594c9-1ca8-4396-b71f-69349c04d362.jpg" },
  { id: 78, name: "Баунти", price: "150 / 250 ₽", category: "tea", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/97d594c9-1ca8-4396-b71f-69349c04d362.jpg" },
  { id: 79, name: "Твикс", price: "150 / 250 ₽", category: "tea", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/97d594c9-1ca8-4396-b71f-69349c04d362.jpg" },

  // К пиву
  { id: 80, name: "Арахис", price: "200 ₽", category: "beer_snacks", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/f9f7b96c-09a6-46c9-b644-67f3cde037e9.jpg", weight: "100 г" },
  { id: 81, name: "Кириешки", price: "200 ₽", category: "beer_snacks", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/f9f7b96c-09a6-46c9-b644-67f3cde037e9.jpg", weight: "100 г" },
  { id: 82, name: "Рыба", price: "400 ₽", category: "beer_snacks", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/f9f7b96c-09a6-46c9-b644-67f3cde037e9.jpg", weight: "100 г" },
  { id: 83, name: "Кальмар", price: "400 ₽", category: "beer_snacks", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/f9f7b96c-09a6-46c9-b644-67f3cde037e9.jpg", weight: "100 г" },
  { id: 84, name: "Сыр (косичка)", price: "400 ₽", category: "beer_snacks", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/f9f7b96c-09a6-46c9-b644-67f3cde037e9.jpg", weight: "100 г" },
  { id: 85, name: "Сыр (хворост)", price: "400 ₽", category: "beer_snacks", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/f9f7b96c-09a6-46c9-b644-67f3cde037e9.jpg", weight: "100 г" },
  { id: 86, name: "Пивная тарелка", price: "1 500 ₽", category: "beer_snacks", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/f9f7b96c-09a6-46c9-b644-67f3cde037e9.jpg", weight: "500 г" },

  // Пиво
  { id: 90, name: "Безалкогольное пиво", price: "220 ₽", category: "beer", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/fd64e4b5-ebb0-4d4e-a939-0705a2a7d23d.jpg" },
  { id: 91, name: "Tuborg", price: "250 ₽", category: "beer", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/fd64e4b5-ebb0-4d4e-a939-0705a2a7d23d.jpg" },
  { id: 92, name: "Жатецкий гусь", price: "250 ₽", category: "beer", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/fd64e4b5-ebb0-4d4e-a939-0705a2a7d23d.jpg" },
  { id: 93, name: "Чешское", price: "250 ₽", category: "beer", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/fd64e4b5-ebb0-4d4e-a939-0705a2a7d23d.jpg" },
  { id: 94, name: "Немецкое", price: "250 ₽", category: "beer", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/fd64e4b5-ebb0-4d4e-a939-0705a2a7d23d.jpg" },
  { id: 95, name: "Weiss Berg", price: "250 ₽", category: "beer", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/fd64e4b5-ebb0-4d4e-a939-0705a2a7d23d.jpg" },
  { id: 96, name: "Kozel (тёмный / светлый)", price: "250 ₽", category: "beer", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/fd64e4b5-ebb0-4d4e-a939-0705a2a7d23d.jpg" },
  { id: 97, name: "Beaver", price: "250 ₽", category: "beer", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/fd64e4b5-ebb0-4d4e-a939-0705a2a7d23d.jpg" },
  { id: 98, name: "Чешское разливное", price: "250 ₽", category: "beer", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/fd64e4b5-ebb0-4d4e-a939-0705a2a7d23d.jpg" },
  { id: 99, name: "Немецкое разливное", price: "250 ₽", category: "beer", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/fd64e4b5-ebb0-4d4e-a939-0705a2a7d23d.jpg" },

  // Безалкогольные напитки
  { id: 100, name: "Сок", price: "100 / 300 ₽", category: "soft", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/391e39de-907f-48de-b332-66a85aad08e5.jpg", weight: "стакан / литр" },
  { id: 101, name: "Red Bull", price: "250 ₽", category: "soft", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/391e39de-907f-48de-b332-66a85aad08e5.jpg" },
  { id: 102, name: "Adrenalin", price: "250 ₽", category: "soft", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/391e39de-907f-48de-b332-66a85aad08e5.jpg" },
  { id: 103, name: "XELL", price: "200 ₽", category: "soft", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/391e39de-907f-48de-b332-66a85aad08e5.jpg" },
  { id: 104, name: "Coca-Cola", price: "200 / 250 ₽", category: "soft", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/391e39de-907f-48de-b332-66a85aad08e5.jpg", weight: "пластик / стекло" },
  { id: 105, name: "Лимонад", price: "200 ₽", category: "soft", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/391e39de-907f-48de-b332-66a85aad08e5.jpg" },
  { id: 106, name: "Вода", price: "100 ₽", category: "soft", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/391e39de-907f-48de-b332-66a85aad08e5.jpg" },
  { id: 107, name: "Завьяловская", price: "200 ₽", category: "soft", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/391e39de-907f-48de-b332-66a85aad08e5.jpg" },
  { id: 108, name: "Ессентуки", price: "200 ₽", category: "soft", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/391e39de-907f-48de-b332-66a85aad08e5.jpg" },
  { id: 109, name: "Кружка чая", price: "80 / 100 ₽", category: "soft", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/391e39de-907f-48de-b332-66a85aad08e5.jpg" },
  { id: 110, name: "Чайник чая", price: "250 / 300 / 350 / 400 ₽", category: "soft", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/391e39de-907f-48de-b332-66a85aad08e5.jpg" },

  // Кофе
  { id: 120, name: "Кофе растворимый", price: "80 ₽", category: "coffee", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/d2768012-164e-4c39-83a2-c69ba837113f.jpg" },
  { id: 121, name: "Американо", price: "150 ₽", category: "coffee", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/d2768012-164e-4c39-83a2-c69ba837113f.jpg" },
  { id: 122, name: "Капучино", price: "180 ₽", category: "coffee", image: "https://cdn.poehali.dev/projects/0c93552c-5b9e-4577-82c3-1e21c96c1712/files/d2768012-164e-4c39-83a2-c69ba837113f.jpg" },
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
          <div className="text-right hidden md:block">
            <p className="font-cormorant text-lg italic text-muted-foreground">
              Меню · Бар · Кухня
            </p>
            <p className="text-xs tracking-wider text-muted-foreground mt-2">
              ТЦ «Южный»
            </p>
            <p className="text-xs tracking-wider text-muted-foreground">
              Ежедневно 14:00 — 02:00
            </p>
            <a
              href="tel:89195331636"
              className="text-xs tracking-wider text-foreground hover:text-muted-foreground transition-colors"
            >
              8 (919) 533-16-36
            </a>
          </div>
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
                  <h2 className="font-montserrat text-xl font-semibold leading-tight text-foreground">
                    {dish.name}
                  </h2>
                  <span className="font-montserrat text-lg font-semibold text-foreground whitespace-nowrap">
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