import React, { useEffect, useRef } from 'react';
import styles from '../styles/Contact.module.css';
import arrowLeft from '../assets/icons/arrowLeft.svg';
import gitHub from '../assets/icons/github.svg';
import vk from '../assets/icons/vk.svg';
import telegram from '../assets/icons/tg.svg';

const cards = [
  {
    title: 'GitHub',
    desc: 'Репозиторий наших проектов, библиотек и экспериментальных AI-решений',
    icon: gitHub,
  },
  {
    title: 'ВКонтакте',
    desc: 'Следите за новостями, инсайтами и закулисьем наших разработок',
    icon: vk,
  },
  {
    title: 'Telegram',
    desc: 'Быстрый способ выйти на связь, задать вопрос или обсудить идею',
    icon: telegram,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // вход секции
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add(styles.in)),
      { threshold: 0.2 }
    );
    io.observe(el);

    // параллакс эллипса
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

  const onRipple = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty('--rx', `${e.clientX - rect.left}px`);
    btn.style.setProperty('--ry', `${e.clientY - rect.top}px`);
  };

  // Прокрутка к форме, если она есть (id="contact-form"), иначе просто к секции
  const onDiscuss = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }) ||
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className={styles.contactSection} ref={sectionRef}>
      <div className={styles.bgEllipse} />

      <div className={styles.container}>
        <div className={styles.timeline}>
          <div className={styles.stepNumber}>5</div>
          <div className={styles.lineVertical}></div>
          <div className={styles.rotatedLabel}>Свяжитесь с нами</div>
        </div>

        <div>
          <div className={styles.header}>
            <div>
              <h3 className={styles.titleSecondary}>Давайте начнем сотрудничество</h3>
              <h4 className={styles.titlePrimary}>
                Мы готовы к следующему вызову. Расскажите, что хотите построить
              </h4>
            </div>
            <button className={styles.viewAllBtn} onClick={onDiscuss} onMouseDown={onRipple}>
              Обсудить проект
              <img src={arrowLeft} alt="" />
              <span className={styles.ripple} aria-hidden="true" />
            </button>
          </div>

          <div className={styles.cardsGrid}>
            {cards.map((c, i) => (
              <a
                key={i}
                className={`${styles.card} ${styles[`d${i}`]}`}
                href={
                  c.title === 'GitHub'
                    ? 'https://github.com/NeuroFlexDev'
                    : c.title === 'Telegram'
                    ? 'https://t.me/neuroflex_tg'
                    : 'https://vk.com/neuroflex'
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.cardIcon}>
                  <img src={c.icon} alt={c.title} />
                </div>
                <div>
                  <h5 className={styles.cardTitle}>{c.title}</h5>
                  <p className={styles.cardDesc}>{c.desc}</p>
                </div>
                <span className={styles.glow} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
