import React from 'react';
import Header from './Header';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Хедер-плашка поверх геро */}
      <Header />

      {/* Размытые эллипсы */}
      <div className={styles.ellipsePrimary} />
      <div className={styles.ellipseSecondary} />
      <div className={styles.ellipseTertiary} />

      {/* Контент геро */}
      <div className={styles.heroContent}>
        <h1>Инновации, которые меняют Бизнес с AI и ML</h1>
        <p>
          Инновационные решения AI и ML для реального бизнеса. Запуск проектов
          от идеи до результата.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Оставить заявку</button>
          <button className={styles.secondaryBtn}>Узнать больше</button>
        </div>
      </div>
    </section>
  );
}
