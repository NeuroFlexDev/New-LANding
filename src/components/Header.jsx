import React from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>NeuroFlex</h1>
      <nav className={styles.nav}>
        <a href="#about" className={styles.navLink}>О нас</a>
        <a href="#approach" className={styles.navLink}>Наш подход</a>
        <a href="#cases" className={styles.navLink}>Кейсы</a>
      </nav>
      <button className={styles.contactBtn}>Связаться с нами</button>
    </header>
  );
}
