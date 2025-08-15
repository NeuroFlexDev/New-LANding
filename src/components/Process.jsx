import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Process.module.css';
import ProcessProgram from './elementUi/ProcessProgram';

export default function Process() {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const shellRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Плавный вход секции при появлении в вьюпорте
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && el.classList.add(styles.in)),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Параллакс фона от положения курсора
  useEffect(() => {
    const el = sectionRef.current;
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

  // Нежный 3D tilt для блока с программой
  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;
    const onMove = (e) => {
      const r = shell.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5; // -0.5..0.5
      const py = (e.clientY - r.top) / r.height - 0.5;
      shell.style.setProperty('--tx', (px * 6).toFixed(2));  // градусы
      shell.style.setProperty('--ty', (py * -6).toFixed(2)); // градусы
    };
    const onLeave = () => {
      shell.style.setProperty('--tx', '0');
      shell.style.setProperty('--ty', '0');
    };
    shell.addEventListener('mousemove', onMove);
    shell.addEventListener('mouseleave', onLeave);
    return () => {
      shell.removeEventListener('mousemove', onMove);
      shell.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section id="approach" className={styles.processSection} ref={sectionRef}>
      <div className={styles.processContainer}>
        <div className={styles.timeline}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.lineVertical}></div>
          <div className={styles.rotatedLabel}>Наш подход</div>
        </div>

        <div className={styles.processWrapper} aria-label="Process">
          <div>
            <h2 className={styles.titleMain}>
              Как мы превращаем идеи в AI-продукты
            </h2>
            <h3 className={styles.titleSecondary}>
              Запускаем AI-продукты с фокусом на рост и валидацию
            </h3>
          </div>

          {/* оболочка с tilt-эффектом для контента программы */}
          <div className={styles.programShell} ref={shellRef}>
            <ProcessProgram isMobile={isMobile} />
          </div>
        </div>
      </div>
    </section>
  );
}
