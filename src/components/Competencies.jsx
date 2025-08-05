import React from 'react';
import styles from '../styles/Competencies.module.css';

const cards = [
  {
    title: 'AI/ML решения',
    desc: 'Разработка и внедрение моделей машинного обучения',
  },
  {
    title: 'Веб-разработка',
    desc: 'Создание фронтенда и бэкенда под вашу задачу',
  },
  {
    title: 'UI/UX дизайн',
    desc: 'Проектирование интерфейсов и пользовательских сценариев',
  },
  {
    title: 'Интеграция',
    desc: 'Внедрение решений в ваши системы и пайплайны',
  },
  {
    title: 'DevOps и инфраструктура',
    desc: 'Оркестрация, контейнеризация и CI/CD',
  },
  {
    title: 'MVP и прототипы',
    desc: 'Быстрый вывод рабочих прототипов на рынок',
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
          <div className={styles.lineVertical} />
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
            </button>
          </div>

          <div className={styles.cardsGrid}>
            {cards.map((c, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon} />
                <h5 className={styles.cardTitle}>{c.title}</h5>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
