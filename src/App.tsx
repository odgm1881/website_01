import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./components/Reveal";
import { Scales } from "./components/Scales";
import { Photo } from "./components/Photo";
import { CountUp } from "./components/CountUp";
import { Collection } from "./components/Collection";
import { CONTACTS, WAITLIST } from "./site";

const NAV: [string, string][] = [
  ["#legenda", "Легенда"],
  ["#aromaty", "Ароматы"],
  ["#liniya", "Линии"],
  ["#flakon", "Флакон"],
  ["#tsena", "Путь"],
];

const PILLARS: [string, string, string][] = [
  ["01", "Подлинность", "Настоящие масляные композиции, без спирта, как было всегда на Востоке. Раскрываются от тепла кожи, держатся 8-12 часов."],
  ["02", "Вес как код", "Каждый продукт измеряется в мискалях. Это одновременно и смысл, и визуальный язык бренда."],
  ["03", "Ремесло", "Прозрачное происхождение уда, розы и смол. Малые партии. Внимание к детали вместо конвейера."],
];

const TRUST = ["Без спирта", "Малые партии", "Прозрачное происхождение"];

const LINES = [
  { k: "attar", n: "Аттар", p: "Масляные духи в роллерах и dab-on, 3-12 мл. Наносятся каплями, без спирта." },
  { k: "bahur", n: "Бахур", p: "Щепа и таблетки для воскуривания. Домашний ритуал и аромат для пространства." },
  { k: "ud", n: "Уд", p: "Щепа агара и дехналь уд в миниатюрных флаконах. Коллекционный, статусный продукт." },
  { k: "nabor", n: "Наборы", p: "Деревянная шкатулка с мини-аттарами и мерной ложечкой. Главный подарок." },
];

const SPECS: [string, string][] = [
  ["Стекло", "матовое, аптекарское, не глянцевое"],
  ["Крышка", "латунь или дерево, не пластик"],
  ["Нанесение", "роллер или стеклянная палочка, по капле"],
  ["Объёмы", "3, 6 и 12 мл, вес дублируется в мискалях"],
];

const LADDER = [
  { k: "Входной", h: "Аттар 3 мл", p: "Знакомство и импульсная покупка. Первое касание бренда.", cta: "Попробовать", top: false },
  { k: "Средний", h: "Аттар 12 мл, бахур", p: "Основной объём продаж. Возврат за полным форматом любимого аромата.", cta: "Взять объём", top: false },
  { k: "Премиум", h: "Дехналь уд, шкатулки", p: "Статус бренда и подарки. Уд и наборы поднимают ценность всей линейки.", cta: "В подарок", top: true },
];

const VALUES: [string, string][] = [
  ["Без спирта", "Масляная традиция, а не ограничение."],
  ["Концепция веса", "Код, которого нет ни у кого в категории."],
  ["Тихий люкс", "Эстетика против золотого китча."],
  ["Прозрачность", "Уд, роза и смолы с историей. Малые партии."],
];

export default function App() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onWaitlist(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") || "").trim();
    if (!email) return;
    const subject = encodeURIComponent("Лист ожидания МИСКАЛЬ");
    const body = encodeURIComponent(`Добавьте меня в лист ожидания. Почта: ${email}`);
    window.location.href = `mailto:${CONTACTS.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      {/* Навигация */}
      <header className={`nav${solid ? " is-solid" : ""}`}>
        <a href="#hero" className="nav__brand" aria-label="МИСКАЛЬ, на главную">
          <span className="mark"><Scales size={22} /></span>
          <span className="nav__word">МИСКАЛЬ</span>
        </a>
        <nav className="nav__links" aria-label="Разделы">
          {NAV.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="nav__right">
          <a href={WAITLIST} className="btn btn--sm nav__cta">Оставить почту</a>
          <button
            type="button"
            className="nav__burger"
            aria-label="Меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
        {menuOpen && (
          <nav className="nav__menu" aria-label="Разделы">
            {NAV.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="hero" id="hero">
        <Photo name="hero" className="hero__img" eager />
        <Reveal className="hero__inner">
          <div className="lockup">
            <span className="lockup__mark" aria-hidden="true"><Scales size={72} strokeWidth={2.2} /></span>
            <h1 className="lockup__word">МИСКАЛЬ</h1>
            <p className="lockup__ar" lang="ar" dir="rtl">مثقال</p>
          </div>
          <p className="hero__slogan">Аромат на вес золота</p>
          <p className="hero__clarify">Масляная парфюмерия без спирта, бахур и уд.</p>
          <div className="hero__cta">
            <a href={WAITLIST} className="btn">Оставить почту</a>
            <a href="#aromaty" className="btn btn--outline">Смотреть коллекцию</a>
          </div>
        </Reveal>
      </section>

      {/* Плашка-доверие */}
      <section className="trust" aria-label="Принципы бренда">
        <div className="wrap trust__row">
          {TRUST.map((t) => (
            <span className="trust__item" key={t}>
              <Scales size={18} strokeWidth={1.6} />{t}
            </span>
          ))}
        </div>
      </section>

      {/* Легенда */}
      <section className="section legend" id="legenda">
        <div className="glow" />
        <div className="wrap legend__grid">
          <Reveal className="legend__lede">
            <h2 className="display">Мера, которой взвешивали<br />самое драгоценное</h2>
            <p>Мискаль (<span lang="ar" dir="rtl">مثقال</span>, <em>mithqāl</em>) это древняя мера веса. Ею веками отмеряли золото, мускус, амбру, шафран и уд.</p>
            <p>Мы вернулись к тому времени, когда аромат был концентрированным, дорогим и наносился каплями. Это не флакон спрея, а мера драгоценного.</p>
            <div className="figure">
              <motion.span
                className="figure__scale" aria-hidden="true"
                initial={{ rotate: -9 }}
                whileInView={{ rotate: [-9, 6, -3, 0] }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Scales size={32} strokeWidth={1.8} />
              </motion.span>
              <span className="figure__num"><CountUp value={4.25} /></span>
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
              <Reveal key={num} className="pillar" delay={i * 0.12}>
                <span className="pillar__bg" aria-hidden="true">{num}</span>
                <span className="pillar__icon" aria-hidden="true"><Scales size={30} strokeWidth={1.6} /></span>
                <h3>{h}</h3>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ароматы (интерактивная полка) */}
      <Collection />

      {/* Линии */}
      <section className="section lines" id="liniya">
        <div className="glow" />
        <Reveal><h2 className="section__h wrap">От входного аттара до коллекционного уда</h2></Reveal>
        <div className="wrap">
          <div className="cards-4">
            {LINES.map((l, i) => (
              <Reveal key={l.k} className="line" delay={i * 0.12}>
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
                <div className="spec__row" key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>
            <p className="bottle__label" lang="ar" dir="rtl">رزق · ٦ مثقال</p>
          </Reveal>
        </div>
      </section>

      {/* Путь (как устроена коллекция) */}
      <section className="section ladder-section" id="tsena">
        <div className="glow" />
        <div className="crest" aria-hidden="true"><Scales size={440} strokeWidth={1} /></div>
        <Reveal><p className="eyebrow wrap">Как устроена коллекция</p></Reveal>
        <Reveal><h2 className="section__h wrap">Путь: от пробы до статуса</h2></Reveal>
        <div className="wrap">
          <div className="ladder">
            {LADDER.map((s, i) => (
              <Reveal key={s.k} className={`step${s.top ? " step--top" : ""}`} delay={i * 0.12}>
                <span className="step__bg" aria-hidden="true">{i + 1}</span>
                <span className="step__k">{s.k}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
                <a href={WAITLIST} className="step__cta">{s.cta}</a>
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
              <Reveal key={h} className="value" delay={i * 0.1}>
                <h3>{h}</h3>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Финал: главный призыв */}
      <section className="closer" id="finale">
        <Photo name="closer" className="closer__img" />
        <Reveal className="wrap closer__inner">
          <p className="closer__ar" lang="ar" dir="rtl">وزن العطر</p>
          <h2 className="display">Аромат скоро в продаже</h2>
          <p className="closer__sub">Оставьте почту, и мы пришлём первыми, когда откроются продажи. То, что взвешивают, а не разбрызгивают.</p>
          <form className="waitlist" onSubmit={onWaitlist}>
            <input type="email" name="email" required placeholder="вашапочта@пример.ру" aria-label="Электронная почта" />
            <button type="submit" className="btn">Оставить почту</button>
          </form>
          <div className="socials">
            <a href={CONTACTS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
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
            {NAV.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className="footer__connect">
            <p className="footer__connect-h">Оставайтесь на связи</p>
            <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
            <a href={CONTACTS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
        </div>
        <div className="wrap footer__legal">2026 МИСКАЛЬ. Аромат на вес золота.</div>
      </footer>
    </>
  );
}
