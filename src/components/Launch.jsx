import React, { useEffect, useRef } from 'react';
import styles from '../styles/Launch.module.css';

export default function Launch() {
  const sectionRef = useRef(null);

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

  const ripple = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty('--rx', `${e.clientX - rect.left}px`);
    btn.style.setProperty('--ry', `${e.clientY - rect.top}px`);
  };

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const goTelegram = () =>
    window.open('https://t.me/neuroflex_ai_common_bot', '_blank', 'noopener,noreferrer');

  return (
    <section id="launch" className={styles.section} ref={sectionRef}>
      <div className={styles.dotsOffset} />
      <div className={styles.ellipse} />

      <div className={styles.content}>
        <h2 className={styles.title}>Будущее строят те, кто запускает его сегодня</h2>
        <p className={styles.subtitle}>
          Расскажите нам о своей идее &mdash; и мы подключим интеллект,
          который превратит её в продукт
        </p>
        <div className={styles.buttons}>
          <button
            className={`${styles.btn} ${styles.primary}`}
            onClick={scrollToContact}
            onMouseDown={ripple}
          >
            Оставить заявку
            <span className={styles.ripple} aria-hidden="true" />
          </button>
          <button
            className={`${styles.btn} ${styles.secondary}`}
            onClick={goTelegram}
            onMouseDown={ripple}
          >
            Написать в Telegram
            <span className={styles.ripple} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
