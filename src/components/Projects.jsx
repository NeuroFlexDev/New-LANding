import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1110);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCaseClick = (index) => {
    if (index === 1) {
      window.open('https://learn.neuroflex.ru/learn/', '_blank');
    }
  };

  return (
    <section className={styles.projectsSection}>
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
            <button className={styles.viewAllBtn}>
              Посмотреть все работы
              <img src={arrowLeft} alt="->" />
            </button>
          </div>

          {!isMobile && (
            <div className={`${styles.casesGrid} ${styles.desktopOnly}`}>
              {cases.map((c, i) => (
                <div key={i} className={styles.caseCard}>
                  <img src={c.img} alt={c.title} className={styles.caseImage} />
                  <div className={styles.caseOverlay}>
                    <div>
                      <h5 className={styles.caseTitle}>{c.title}</h5>
                      <p className={styles.caseDesc}>{c.desc}</p>
                    </div>
                    {/* Передаем индекс элемента в обработчик */}
                    <button 
                      className={styles.caseArrow} 
                      onClick={() => handleCaseClick(i)}
                    >
                      <img src={arrowLeftWhite} alt="" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {isMobile && (
            <div className={`${styles.mobileCases} ${styles.mobileOnly}`}>
              {cases.map((c, i) => (
                <div key={i} className={styles.mobileCard}>
                  <img src={c.img} alt={c.title} className={styles.mobileImage} />
                  <div className={styles.mobileCardContent}>
                    <h5 className={styles.mobileCardTitle}>{c.title}</h5>
                    <p className={styles.mobileCardDesc}>{c.desc}</p>
                    {/* Передаем индекс элемента в обработчик */}
                    <button 
                      className={styles.mobileCardButton}
                      onClick={() => handleCaseClick(i)}
                    >
                      Подробнее
                      <img src={arrowLeftWhiteMobile} alt="" />
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
