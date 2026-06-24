// Единый источник данных и контактов сайта.

// TODO: заменить плейсхолдеры на реальные контакты бренда.
export const CONTACTS = {
  email: "hello@miskal.style",
  instagram: "https://instagram.com/miskal",
  telegram: "https://t.me/miskal",
};

// Главное действие страницы ведёт в финальный блок с формой.
export const WAITLIST = "#finale";

export type Scent = {
  k: string;
  n: string;
  ar: string;
  tag: string;
  accent: string;
  pyramid: { top: string; heart: string; base: string };
  desc: string;
};

export const SCENTS: Scent[] = [
  {
    k: "rizk", n: "Ризк", ar: "رزق", tag: "Флагман", accent: "#C98A2E",
    pyramid: { top: "Шафран", heart: "Роза Таиф", base: "Уд" },
    desc: "Тёплый, парадный аромат-благословение. Наносят каплей на запястье утром, и он раскрывается весь день.",
  },
  {
    k: "leil", n: "Лейл", ar: "ليل", tag: "Ночь", accent: "#3E4D78",
    pyramid: { top: "Ладан", heart: "Белый мускус", base: "Амбра" },
    desc: "Глубокий, обволакивающий, вечерний. Аромат поздних часов.",
  },
  {
    k: "sahar", n: "Сахар", ar: "سحر", tag: "Рассвет", accent: "#C9A36B",
    pyramid: { top: "Бергамот", heart: "Жасмин самбак", base: "Сандал" },
    desc: "Светлый, дневной, прозрачный. Аромат раннего утра.",
  },
  {
    k: "misk", n: "Миск", ar: "مسك", tag: "Мускус", accent: "#B98A86",
    pyramid: { top: "Свежий мускус", heart: "Белый мускус", base: "Пудровый шлейф" },
    desc: "Чистый, пудровый и очень носибельный. Тёплая кожа.",
  },
  {
    k: "udroyal", n: "Уд Рояль", ar: "عود", tag: "Вершина", accent: "#7A6049",
    pyramid: { top: "Специи", heart: "Кожа", base: "Дымный уд" },
    desc: "Самый плотный, вечерний. Дым агара, кожа и специи.",
  },
];
