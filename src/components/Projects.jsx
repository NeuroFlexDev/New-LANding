import React from 'react';
import styles from '../styles/Projects.module.css';
// import abeonaImg from '../assets/abeona.jpg';
// import neurolearnImg from '../assets/neurolearn.jpg';

const cases = [
  {
    title: 'Abeona — Dashboard с искусственным интеллектом',
    desc: 'Интерактивный дашборд, который обрабатывает большие объёмы данных, выявляет закономерности и предлагает решения на основе моделей машинного обучения.',
    img: '',
  },
  {
    title: 'NeuroLearn — Персонализированное обучение',
    desc: 'Платформа, адаптирующая обучение под пользователя с помощью AI-алгоритмов и анализа поведения.',
    img: '',
  },
];

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.blurEllipse} />

      <div className={styles.container}>
        <div className={styles.timeline}>
          <div className={styles.stepNumber}>4</div>
          <div className={styles.lineVertical} />
          <div className={styles.rotatedLabel}>Проекты</div>
        </div>

        <div>
          <div className={styles.header}>
            <h3 className={styles.titleSecondary}>
              Реальные AI-продукты, созданные NeuroFlex
            </h3>
            <h4 className={styles.titleMain}>
              От идеи до запуска — успешные кейсы, которые меняют отрасли.
            </h4>
            <p className={styles.subTitle}>
              Наши проекты — отражение будущего искусственного интеллекта.
            </p>
            <button className={styles.viewAllBtn}>
              Посмотреть все работы
              <span className={styles.viewAllBtnIcon} />
            </button>
          </div>

          <div className={styles.casesGrid}>
            {cases.map((c, i) => (
              <div key={i} className={styles.caseCard}>
                <img src={c.img} alt={c.title} className={styles.caseImage} />
                <div className={styles.caseOverlay}>
                  <h5 className={styles.caseTitle}>{c.title}</h5>
                  <p className={styles.caseDesc}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
