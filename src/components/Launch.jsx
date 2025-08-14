import React from 'react';
import styles from '../styles/Launch.module.css';
    // import dots from '../assets/DotsOffset8px.png';

export default function Launch() {
  return (
    <section className={styles.section}>
      <div
        className={styles.dotsOffset}
        style={{ backgroundImage: `url(///)` }}
      />
      <div className={styles.ellipse} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          Будущее строят те, кто запускает его сегодня
        </h2>
        <p className={styles.subtitle}>
          Расскажите нам о своей идее &mdash; и мы подключим интеллект,
          который превратит её в продукт
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.btn} ${styles.primary}`}>
            Оставить заявку
          </button>
          <button className={`${styles.btn} ${styles.secondary}`}>
            Написать в Telegram
          </button>
        </div>
      </div>
    </section>
  );
}
