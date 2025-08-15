import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Projects.module.css';
import arrowLeft from '../assets/icons/arrowLeft.svg';
import abeonaImg from '../assets/icons/abeona.svg';
import neurolearnImg from '../assets/icons/course.svg';
import arrowLeftWhite from '../assets/icons/arrowLeftWhite.svg';
import arrowLeftWhiteMobile from '../assets/icons/arrowLeftWhiteMobile.svg';

const cases = [
  {
    title: 'Abeona — Dashboard с искусственным интеллектом',
    desc: 'Интерактивный дашборд, который обрабатывает большие объёмы данных, выявляет закономерности и предлагает решения на основе моделей машинного обучения.',
    img: abeonaImg,
  },
  {
    title: 'NeuroLearn — Персонализированное обучение',
    desc: 'Платформа, адаптирующая обучение под пользователя с помощью AI-алгоритмов и анализа поведения.',
    img: neurolearnImg,
  },
];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1110);
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Вход секции + параллакс эллипса
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add(styles.in)),
      { threshold: 0.2 }
    );
    io.observe(el);

    const onMove = (ev) => {
      const r = el.getBoundingClientRect();
      const x = (ev.clientX - r.left) / r.width - 0.5;
      const y = (ev.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--mx', x.toFixed(3));
      el.style.setProperty('--my', y.toFixed(3));
    };
    el.addEventListener('mousemove', onMove);

    return () => {
      io.disconnect();
      el.removeEventListener('mousemove', onMove);
    };
  }, []);

  const handleCaseClick = (index) => {
    if (index === 1) window.open('https://learn.neuroflex.ru/learn/', '_blank');
  };

  const onRipple = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty('--rx', `${e.clientX - rect.left}px`);
    btn.style.setProperty('--ry', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="cases" className={styles.projectsSection} ref={sectionRef}>
      <div className={styles.blurEllipse} />

      <div className={styles.container}>
        <div className={styles.timeline}>
          <div className={styles.stepNumber}>4</div>
          <div className={styles.lineVertical}></div>
          <div className={styles.rotatedLabel}>Проекты</div>
        </div>

        <div>
          <div className={styles.header}>
            <div className={styles.titles}>
              <h3 className={styles.titleSecondary}>
                Реальные AI-продукты, созданные NeuroFlex
              </h3>
              <h4 className={styles.titleMain}>
                От идеи до запуска — успешные кейсы, которые меняют отрасли.
              </h4>
              <p className={styles.subTitle}>
                Наши проекты — отражение будущего искусственного интеллекта.
              </p>
            </div>
            <button className={styles.viewAllBtn} onMouseDown={onRipple}>
              Посмотреть все работы
              <img src={arrowLeft} alt="->" />
              <span className={styles.ripple} aria-hidden="true" />
            </button>
          </div>

          {!isMobile && (
            <div className={`${styles.casesGrid} ${styles.desktopOnly}`}>
              {cases.map((c, i) => (
                <div key={i} className={`${styles.caseCard} ${styles[`d${i}`]}`}>
                  <img src={c.img} alt={c.title} className={styles.caseImage} />
                  <div className={styles.caseOverlay}>
                    <div>
                      <h5 className={styles.caseTitle}>{c.title}</h5>
                      <p className={styles.caseDesc}>{c.desc}</p>
                    </div>
                    <button
                      className={styles.caseArrow}
                      onClick={() => handleCaseClick(i)}
                      onMouseDown={onRipple}
                    >
                      <img src={arrowLeftWhite} alt="" />
                      <span className={styles.ripple} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {isMobile && (
            <div className={`${styles.mobileCases} ${styles.mobileOnly}`}>
              {cases.map((c, i) => (
                <div key={i} className={`${styles.mobileCard} ${styles[`d${i}`]}`}>
                  <img src={c.img} alt={c.title} className={styles.mobileImage} />
                  <div className={styles.mobileCardContent}>
                    <h5 className={styles.mobileCardTitle}>{c.title}</h5>
                    <p className={styles.mobileCardDesc}>{c.desc}</p>
                    <button
                      className={styles.mobileCardButton}
                      onClick={() => handleCaseClick(i)}
                      onMouseDown={onRipple}
                    >
                      Подробнее
                      <img src={arrowLeftWhiteMobile} alt="" />
                      <span className={styles.ripple} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
