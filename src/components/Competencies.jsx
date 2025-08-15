import React, { useEffect, useRef } from 'react';
import styles from '../styles/Competencies.module.css';
import arrowLeft from '../assets/icons/arrowLeft.svg';
import aiImg from '../assets/icons/ai.svg';
import webImg from '../assets/icons/web.svg';
import designImg from '../assets/icons/design.svg';
import integrationImg from '../assets/icons/integration.svg';
import devopsImg from '../assets/icons/devops.svg';
import mvpImg from '../assets/icons/mvp.svg';

const cards = [
  { title: 'AI/ML решения', desc: 'Разработка и внедрение моделей машинного обучения', img: aiImg },
  { title: 'Веб-разработка', desc: 'Создание фронтенда и бэкенда под вашу задачу', img: webImg },
  { title: 'UI/UX дизайн', desc: 'Проектирование интерфейсов и пользовательских сценариев', img: designImg },
  { title: 'Интеграция', desc: 'Внедрение решений в ваши системы и пайплайны', img: integrationImg },
  { title: 'DevOps и инфраструктура', desc: 'Оркестрация, контейнеризация и CI/CD', img: devopsImg },
  { title: 'MVP и прототипы', desc: 'Быстрый вывод рабочих прототипов на рынок', img: mvpImg },
];

export default function Competencies() {
  const sectionRef = useRef(null);

  // вход секции + параллакс фона
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && el.classList.add(styles.in)),
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

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="competencies" className={styles.competenciesSection} ref={sectionRef}>
      <div className={styles.bgEllipse} />

      <div className={styles.container}>
        {/* Таймлайн */}
        <div className={styles.timeline}>
          <div className={styles.stepNumber}>3</div>
          <div className={styles.lineVertical}></div>
          <div className={styles.rotatedLabel}>Компетенции</div>
        </div>

        {/* Контент */}
        <div>
          <div className={styles.contentHeader}>
            <div className={styles.titles}>
              <h3 className={styles.titlePrimary}>
                Мы покрываем весь цикл создания AI-продуктов
              </h3>
              <h4 className={styles.titleSecondary}>
                От стратегии и дизайна до ML-интеграции и вывода на рынок
              </h4>
              <p className={styles.ctaText}>Мы — создаем, от вас требуется лишь идея</p>
            </div>

            <button
              className={styles.discussBtn}
              onClick={() => scrollTo('contact')}
            >
              Обсудить проект
              <img src={arrowLeft} alt="" />
              <span className={styles.ripple} aria-hidden="true" />
            </button>
          </div>

          <div className={styles.cardsGrid}>
            {cards.map((c, i) => (
              <div key={i} className={`${styles.card} ${styles[`d${i}`]}`}>
                <div className={styles.cardIconWrap}>
                  <img src={c.img} alt="" className={styles.cardIcon} />
                </div>
                <div className={styles.cardContent}>
                  <h5 className={styles.cardTitle}>{c.title}</h5>
                  <p className={styles.cardDesc}>{c.desc}</p>
                </div>
                <span className={styles.glow} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
