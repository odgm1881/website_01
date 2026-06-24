import { useState, type CSSProperties } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { SCENTS, WAITLIST } from "../site";

const accentVar = (a: string) => ({ ["--accent" as string]: a } as CSSProperties);

export function Collection() {
  const [i, setI] = useState(0);
  const s = SCENTS[i];
  const reduce = useReducedMotion();

  const fade = reduce
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
  const slide = reduce
    ? {}
    : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 } };

  return (
    <section className="section aromaty" id="aromaty">
      <div className="glow" />
      <div className="wrap">
        <Reveal><p className="eyebrow">Коллекция</p></Reveal>
        <Reveal><h2 className="section__h section__h--light">Пять ароматов, единый знак.<br />Выберите свой.</h2></Reveal>

        <Reveal className="shelf" style={accentVar(s.accent)} delay={0.05}>
          <div className="shelf__feature">
            <div className="shelf__media">
              <AnimatePresence mode="wait">
                <motion.div key={s.k} className="shelf__photo-wrap" {...fade}
                  transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}>
                  <Photo name={s.k} className="shelf__photo" alt={`Флакон аромата ${s.n}`} />
                </motion.div>
              </AnimatePresence>
              <span className="shelf__bar" />
            </div>

            <div className="shelf__body">
              <AnimatePresence mode="wait">
                <motion.div key={s.k} {...slide}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}>
                  <span className="shelf__tag">{s.tag}</span>
                  <div className="shelf__name">
                    <h3>{s.n}</h3>
                    <span className="scent__ar" lang="ar" dir="rtl">{s.ar}</span>
                  </div>
                  <dl className="pyramid">
                    <div><dt>Верх</dt><dd>{s.pyramid.top}</dd></div>
                    <div><dt>Сердце</dt><dd>{s.pyramid.heart}</dd></div>
                    <div><dt>База</dt><dd>{s.pyramid.base}</dd></div>
                  </dl>
                  <p className="shelf__desc">{s.desc}</p>
                  <a className="btn btn--accent" href={WAITLIST}>Хочу первым</a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="picker" role="tablist" aria-label="Выбор аромата">
            {SCENTS.map((x, idx) => (
              <button
                key={x.k}
                type="button"
                role="tab"
                aria-selected={idx === i}
                className={`pick${idx === i ? " is-active" : ""}`}
                style={accentVar(x.accent)}
                onClick={() => setI(idx)}
              >
                <span className="pick__thumb"><Photo name={x.k} className="pick__img" alt="" /></span>
                <span className="pick__name">{x.n}</span>
                <span className="pick__ar" lang="ar" dir="rtl">{x.ar}</span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
