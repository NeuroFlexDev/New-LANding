import React, { useEffect, useRef } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const headerRef = useRef(null);
  const rippleRef = useRef(null);

  // Усиливаем хедер при скролле (тень/контраст/подсветка)
  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;
      const y = window.scrollY || 0;
      if (y > 12) headerRef.current.classList.add(styles.scrolled);
      else headerRef.current.classList.remove(styles.scrolled);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Лёгкий параллакс-шиммер рамки от движения мыши
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty('--mx', x.toFixed(3));
      el.style.setProperty('--my', y.toFixed(3));
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  // Риппл на кнопке
  const onContactClick = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--rx', `${x}px`);
    btn.style.setProperty('--ry', `${y}px`);
    // скролл к #contact
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header ref={headerRef} className={styles.header} aria-label="Основная навигация">
      <h1 className={styles.logo}>NeuroFlex</h1>

      <nav className={styles.nav}>
        <a href="#about" className={styles.navLink}>
          <span>О нас</span>
        </a>
        <a href="#approach" className={styles.navLink}>
          <span>Наш подход</span>
        </a>
        <a href="#cases" className={styles.navLink}>
          <span>Кейсы</span>
        </a>
      </nav>

      <button className={styles.contactBtn} onClick={onContactClick} ref={rippleRef}>
        Связаться с нами
        <span className={styles.ripple} aria-hidden="true" />
      </button>
    </header>
  );
}
