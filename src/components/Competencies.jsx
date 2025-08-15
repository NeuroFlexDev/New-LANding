import React from 'react';
import styles from '../styles/Competencies.module.css';
import arrowLeft from '../assets/icons/arrowLeft.svg';
import aiImg from '../assets/icons/ai.svg';
import webImg from '../assets/icons/web.svg';
import designImg from '../assets/icons/design.svg';
import integrationImg from '../assets/icons/integration.svg';
import devopsImg from '../assets/icons/devops.svg';
import mvpImg from '../assets/icons/mvp.svg';

const cards = [
  {
    title: 'AI/ML решения',
    desc: 'Разработка и внедрение моделей машинного обучения',
    img: aiImg,
  },
  {
    title: 'Веб-разработка',
    desc: 'Создание фронтенда и бэкенда под вашу задачу',
    img: webImg,
  },
  {
    title: 'UI/UX дизайн',
    desc: 'Проектирование интерфейсов и пользовательских сценариев',
    img: designImg,
  },
  {
    title: 'Интеграция',
    desc: 'Внедрение решений в ваши системы и пайплайны',
    img: integrationImg,
  },
  {
    title: 'DevOps и инфраструктура',
    desc: 'Оркестрация, контейнеризация и CI/CD',
    img: devopsImg,
  },
  {
    title: 'MVP и прототипы',
    desc: 'Быстрый вывод рабочих прототипов на рынок',
    img: mvpImg,
  },
];

export default function Competencies() {
  return (
    <section className={styles.competenciesSection}>
      <div className={styles.bgEllipse} />

      <div className={styles.container}>
        {/* Таймлайн слева */}
        <div className={styles.timeline}>
          <div className={styles.stepNumber}>3</div>
          <div className={styles.lineVertical}></div>
          <div className={styles.rotatedLabel}>Компетенции</div>
        </div>

        {/* Контент справа */}
        <div>
          <div className={styles.contentHeader}>
            <div className={styles.titles}>
              <h3 className={styles.titlePrimary}>
                Мы покрываем весь цикл создания AI-продуктов
              </h3>
              <h4 className={styles.titleSecondary}>
                От стратегии и дизайна до ML-интеграции и вывода на рынок
              </h4>
              <p className={styles.ctaText}>
                Мы — создаем, от вас требуется лишь идея
              </p>
            </div>
            <button className={styles.discussBtn}>
              Обсудить проект
              <img src={arrowLeft} alt="" />
            </button>
          </div>

          <div className={styles.cardsGrid}>
            {cards.map((c, i) => (
              <div key={i} className={styles.card}>
                <div style={{ textAlign: 'center', marginBottom: 'auto', marginTop: 'auto' }}>
                  <img src={c.img} alt="icon" className={styles.cardIcon} />
                </div>
                <div className={styles.cardContent}>
                  <h5 className={styles.cardTitle}>{c.title}</h5>
                  <p className={styles.cardDesc}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
