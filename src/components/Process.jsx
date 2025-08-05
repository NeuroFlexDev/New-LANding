import React from 'react';
import styles from '../styles/Process.module.css';

const steps = [
  'Анализ рынка, pain points, сбор гипотез и формирование AI-концепта',
  'Быстрая проверка гипотез: от baseline моделей до proof-of-concept',
  'Создание минимально жизнеспособного AI-продукта с фокусом на метрики',
  'Создание минимально жизнеспособного AI-продукта с фокусом на метрики',
  'Оптимизация, рост, привлечение инвестиций и выход на рынок',
];

export default function Process() {
  return (
    <section className={styles.processSection}>
      <div className={styles.processContainer}>
        <div className={styles.stepNumber}>2</div>
        <div className={styles.lineVertical}></div>
        <div className={styles.rotatedLabel}>Наш подход</div>

        <div>
          <h2 className={styles.titleMain}>
            Как мы превращаем идеи в AI-продукты
          </h2>
          <h3 className={styles.titleSecondary}>
            Запускаем AI-продукты с фокусом на рост и валидацию
          </h3>
          <div className={styles.separator}></div>

          <div className={styles.stepsGrid}>
            {steps.map((text, i) => (
              <div key={i} className={`${styles.stepBox} ${styles[`step${i+1}`]}`}>
                <p>{text}</p>
                <div className={styles.connector}></div>
                <div className={styles.dot}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
