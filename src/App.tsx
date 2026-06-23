import { useEffect, useState, type CSSProperties } from "react";
import { Reveal } from "./components/Reveal";
import { Scales } from "./components/Scales";
import { Photo } from "./components/Photo";

const NAV = [
  ["#legenda", "Легенда"],
  ["#aromaty", "Ароматы"],
  ["#liniya", "Линии"],
  ["#flakon", "Флакон"],
  ["#tsena", "Цена"],
];

const PILLARS = [
  ["01", "Подлинность", "Настоящие масляные композиции, без спирта, как было всегда на Востоке. Раскрываются от тепла кожи, держатся 8-12 часов."],
  ["02", "Вес как код", "Каждый продукт измеряется в мискалях. Это одновременно и смысл, и визуальный язык бренда."],
  ["03", "Ремесло", "Прозрачное происхождение уда, розы и смол. Малые партии. Внимание к детали вместо конвейера."],
];

const SCENTS = [
  { k: "rizk", n: "Ризк", ar: "رزق", notes: "Роза Таиф, шафран, уд", tag: "Флагман", accent: "#C98A2E" },
  { k: "leil", n: "Лейл", ar: "ليل", notes: "Амбра, мускус, ладан", tag: "Ночь", accent: "#3E4D78" },
  { k: "sahar", n: "Сахар", ar: "سحر", notes: "Бергамот, жасмин, сандал", tag: "Рассвет", accent: "#C9A36B" },
  { k: "misk", n: "Миск", ar: "مسك", notes: "Белый мускус, пудра", tag: "Мускус", accent: "#B98A86" },
  { k: "udroyal", n: "Уд Рояль", ar: "عود", notes: "Дымный уд, кожа, специи", tag: "Вершина", accent: "#7A6049" },
];

const LINES = [
  { k: "attar", n: "Аттар", p: "Масляные духи в роллерах и dab-on, 3-12 мл. Наносятся каплями, без спирта." },
  { k: "bahur", n: "Бахур", p: "Щепа и таблетки для воскуривания. Домашний ритуал и аромат для пространства." },
  { k: "ud", n: "Уд", p: "Щепа агара и дехналь уд в миниатюрных флаконах. Коллекционный, статусный продукт." },
  { k: "nabor", n: "Наборы", p: "Деревянная шкатулка с мини-аттарами и мерной ложечкой. Главный подарок." },
];

const SPECS = [
  ["Стекло", "матовое, аптекарское, не глянцевое"],
  ["Крышка", "латунь или дерево, не пластик"],
  ["Нанесение", "роллер или стеклянная палочка, по капле"],
  ["Объёмы", "3, 6 и 12 мл, вес дублируется в мискалях"],
];

const LADDER = [
  { k: "Входной", h: "Аттар 3 мл", p: "Знакомство и импульсная покупка. Первое касание бренда.", top: false },
  { k: "Средний", h: "Аттар 12 мл, бахур", p: "Основной объём продаж. Возврат за полным форматом любимого аромата.", top: false },
  { k: "Премиум", h: "Дехналь уд, шкатулки", p: "Статус бренда и подарки. Уд и наборы поднимают ценность всей линейки.", top: true },
];

const VALUES = [
  ["Без спирта", "Масляная традиция, а не ограничение."],
  ["Концепция веса", "Код, которого нет ни у кого в категории."],
  ["Тихий люкс", "Эстетика против золотого китча."],
  ["Прозрачность", "Уд, роза и смолы с историей. Малые партии."],
];

function accentStyle(accent: string): CSSProperties {
  return { ["--accent" as string]: accent } as CSSProperties;
}

export default function App() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Навигация */}
      <header className={`nav${solid ? " is-solid" : ""}`}>
        <a href="#hero" className="nav__brand" aria-label="МИСКАЛЬ, на главную">
          <span className="mark"><Scales size={22} /></span>
          <span className="nav__word">МИСКАЛЬ</span>
        </a>
        <nav className="nav__links" aria-label="Разделы">
          {NAV.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="hero" id="hero">
        <Photo name="hero" className="hero__img" eager />
        <Reveal className="hero__inner">
          <div className="lockup">
            <span className="lockup__mark"><Scales size={72} strokeWidth={2.2} /></span>
            <h1 className="lockup__word">МИСКАЛЬ</h1>
            <p className="lockup__ar" lang="ar" dir="rtl">مثقال</p>
          </div>
          <p className="hero__slogan">Аромат на вес золота</p>
          <a href="#aromaty" className="btn">Смотреть коллекцию</a>
        </Reveal>
      </section>

      {/* Легенда */}
      <section className="section legend" id="legenda">
        <div className="glow" />
        <div className="wrap legend__grid">
          <Reveal className="legend__lede">
            <h2 className="display">Мера, которой взвешивали<br />самое драгоценное</h2>
            <p>
              Мискаль (<span lang="ar" dir="rtl">مثقال</span>, <em>mithqāl</em>) это древняя мера веса.
              Ею веками отмеряли золото, мускус, амбру, шафран и уд.
            </p>
            <p>Мы вернулись к тому времени, когда аромат был концентрированным, дорогим и наносился каплями. Это не флакон спрея, а мера драгоценного.</p>
            <div className="figure">
              <span className="figure__num">4,25</span>
              <span className="figure__rest">
                <span className="figure__unit">грамма</span>
                <span className="figure__cap">один мискаль</span>
              </span>
            </div>
          </Reveal>
          <Reveal className="legend__media" delay={0.1}>
            <Photo name="scales" className="frame__img" alt="Латунные аптекарские весы с гирями в мискалях" />
          </Reveal>
        </div>
      </section>

      {/* Три опоры */}
      <section className="section pillars">
        <div className="glow" />
        <div className="crest" aria-hidden="true"><Scales size={440} strokeWidth={1} /></div>
        <Reveal><h2 className="section__h wrap">Три опоры бренда</h2></Reveal>
        <div className="wrap">
          <div className="cards-3">
            {PILLARS.map(([num, h, p], i) => (
              <Reveal key={num} className="pillar" delay={i * 0.08}>
                <span className="pillar__bg" aria-hidden="true">{num}</span>
                <span className="pillar__icon" aria-hidden="true"><Scales size={30} strokeWidth={1.6} /></span>
                <h3>{h}</h3>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ароматы: пять в одну строку */}
      <section className="section aromaty" id="aromaty">
        <div className="glow" />
        <div className="wrap">
          <Reveal><p className="eyebrow">Коллекция</p></Reveal>
          <Reveal><h2 className="section__h section__h--light">Пять ароматов, единый знак,<br />свой акцент у каждого</h2></Reveal>
          <Reveal className="feature" style={accentStyle(SCENTS[0].accent)}>
            <div className="feature__media">
              <Photo name={SCENTS[0].k} className="feature__photo" alt="Флакон аромата Ризк" />
            </div>
            <div className="feature__body">
              <span className="feature__tag">{SCENTS[0].tag}</span>
              <div className="scent__name">
                <h3>{SCENTS[0].n}</h3>
                <span className="scent__ar" lang="ar" dir="rtl">{SCENTS[0].ar}</span>
              </div>
              <p className="scent__notes">{SCENTS[0].notes}</p>
              <p className="feature__desc">Тёплый, парадный аромат-благословение. Наносят каплей на запястье утром, и он раскрывается весь день.</p>
            </div>
          </Reveal>
          <div className="scent-grid">
            {SCENTS.slice(1).map((s, i) => (
              <Reveal key={s.k} className="scent" style={accentStyle(s.accent)} delay={i * 0.06}>
                <div className="scent__media">
                  <Photo name={s.k} className="scent__photo" alt={`Флакон аромата ${s.n}`} />
                </div>
                <div className="scent__body">
                  <div className="scent__name">
                    <h3>{s.n}</h3>
                    <span className="scent__ar" lang="ar" dir="rtl">{s.ar}</span>
                  </div>
                  <p className="scent__notes">{s.notes}</p>
                  <span className="scent__tag">{s.tag}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Линии: карточки */}
      <section className="section lines" id="liniya">
        <div className="glow" />
        <Reveal><h2 className="section__h wrap">От входного аттара до коллекционного уда</h2></Reveal>
        <div className="wrap">
          <div className="cards-4">
            {LINES.map((l, i) => (
              <Reveal key={l.k} className="line" delay={i * 0.07}>
                <div className="line__media">
                  <Photo name={l.k} className="line__photo" alt={l.n} />
                </div>
                <h3>{l.n}</h3>
                <p>{l.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Флакон */}
      <section className="section bottle" id="flakon">
        <div className="glow" />
        <div className="wrap bottle__grid">
          <Reveal className="bottle__media">
            <Photo name="bottle" className="bottle__img" alt="Флакон Мискаль из матового стекла с латунной крышкой" />
          </Reveal>
          <Reveal className="bottle__text" delay={0.1}>
            <h2 className="display">Флакон, который весит больше,<br />чем кажется</h2>
            <p>Невысокий, плотный, с прямыми гранями и мягко скруглёнными углами. Матовое кремовое или дымчато-янтарное стекло. Крышка из латуни или дерева, увесистая, с приятным щелчком.</p>
            <dl className="spec">
              {SPECS.map(([dt, dd]) => (
                <div className="spec__row" key={dt}>
                  <dt>{dt}</dt>
                  <dd>{dd}</dd>
                </div>
              ))}
            </dl>
            <p className="bottle__label" lang="ar" dir="rtl">رزق · ٦ مثقال</p>
          </Reveal>
        </div>
      </section>

      {/* Цена */}
      <section className="section ladder-section" id="tsena">
        <div className="glow" />
        <div className="crest" aria-hidden="true"><Scales size={440} strokeWidth={1} /></div>
        <Reveal><h2 className="section__h wrap">Путь вверх: от пробы до статуса</h2></Reveal>
        <div className="wrap">
          <div className="ladder">
            {LADDER.map((s, i) => (
              <Reveal key={s.k} className={`step${s.top ? " step--top" : ""}`} delay={i * 0.08}>
                <span className="step__bg" aria-hidden="true">{i + 1}</span>
                <span className="step__k">{s.k}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Отличие */}
      <section className="section values">
        <div className="glow" />
        <div className="crest" aria-hidden="true"><Scales size={440} strokeWidth={1} /></div>
        <Reveal><h2 className="section__h wrap">Выделяемся форматом, а не громкостью</h2></Reveal>
        <div className="wrap">
          <div className="values__strip">
            {VALUES.map(([h, p], i) => (
              <Reveal key={h} className="value" delay={i * 0.06}>
                <h3>{h}</h3>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Финал */}
      <section className="closer">
        <Photo name="closer" className="closer__img" />
        <Reveal className="wrap closer__inner">
          <p className="closer__ar" lang="ar" dir="rtl">وزن العطر</p>
          <h2 className="display">Вес аромата</h2>
          <p className="closer__sub">То, что взвешивают, а не разбрызгивают.</p>
          <a href="#hero" className="btn btn--ghost">Наверх</a>
        </Reveal>
      </section>

      {/* Подвал */}
      <footer className="footer">
        <div className="wrap footer__grid">
          <div className="footer__brand">
            <span className="mark"><Scales size={22} /></span>
            <span className="footer__word">МИСКАЛЬ <span lang="ar" dir="rtl">مثقال</span></span>
            <p className="footer__tag">Мера драгоценного</p>
          </div>
          <nav className="footer__nav" aria-label="Разделы">
            {NAV.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <p className="footer__meta">
            Масляная парфюмерия, бахур и уд.<br />
            2026 МИСКАЛЬ. Аромат на вес золота.
          </p>
        </div>
      </footer>
    </>
  );
}
