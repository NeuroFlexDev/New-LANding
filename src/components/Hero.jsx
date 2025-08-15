import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const [showHeader, setShowHeader] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => setShowHeader(window.innerWidth > 790);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Параллакс по движению мыши
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty('--mx', x.toString());
      el.style.setProperty('--my', y.toString());
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  // Плавное появление контента при входе в вьюпорт
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(styles.in);
          }
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
    <section ref={heroRef} className={styles.hero} id="hero">
      {showHeader && <Header />}

      {/* Размытые эллипсы — теперь «дышат» и слегка двигаются от мыши */}
      <div className={styles.ellipsePrimary} />
      <div className={styles.ellipseSecondary} />
      <div className={styles.ellipseTertiary} />

      {/* Контент */}
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Инновации, которые меняют Бизнес с AI и ML
        </h1>
        <p className={styles.subtitle}>
          Инновационные решения AI и ML для реального бизнеса. Запуск проектов
          от идеи до результата.
        </p>
        <div className={styles.buttons}>
          <button
            className={styles.primaryBtn}
            onClick={() => scrollTo('contact')}
          >
            Оставить заявку
          </button>
          <button
            className={styles.secondaryBtn}
            onClick={() => scrollTo('about')}
          >
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
}
