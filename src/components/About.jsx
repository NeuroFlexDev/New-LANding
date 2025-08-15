import React, { useEffect, useRef } from 'react';
import styles from '../styles/About.module.css';
import arrowIcon from '../assets/icons/arrowLeft.svg';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.classList.add(styles.in);
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" className={styles.aboutSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.timeline}>
          <div className={styles.stepNumber}>1</div>
          <div className={styles.lineVertical}></div>
          <div className={styles.rotatedLabel}>О нас</div>
        </div>

        <div>
          <h2 className={styles.headingMain}>
            Больше, чем просто разработка
          </h2>
          <h3 className={styles.headingSecondary}>
            Мы создаем стартапы будущего на базе ИИ
          </h3>

          <div className={styles.lineHorizontal}></div>

          <div className={styles.underline}>
            <p className={styles.description}>
              NeuroFlex — это студия, запускающая AI-стартапы нового
              поколения. Мы объединяем исследовательский подход,
              инженерную строгость и предпринимательскую интуицию, чтобы
              строить масштабируемые продукты на основе машинного
              обучения и искусственного интеллекта. Вместо того чтобы
              делать "еще одно ML-приложение", мы создаем стартапы, которые
              меняют парадигмы в своей нише.
            </p>

            <button
              className={styles.projectsBtn}
              onClick={() => scrollTo('cases')}
            >
              Наши проекты
              <span className={styles.arrowIcon}>
                <img src={arrowIcon} alt="->" />
              </span>
              <span className={styles.ripple} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
