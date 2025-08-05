import React from 'react';
import styles from '../styles/Contact.module.css';

const cards = [
  {
    title: 'GitHub',
    desc: 'Репозиторий наших проектов, библиотек и экспериментальных AI-решений',
    icon: null, // сюда можно вставить SVG-иконку
  },
  {
    title: 'ВКонтакте',
    desc: 'Следите за новостями, инсайтами и закулисьем наших разработок',
    icon: null,
  },
  {
    title: 'Telegram',
    desc: 'Быстрый способ выйти на связь, задать вопрос или обсудить идею',
    icon: null,
  },
];

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.bgEllipse} />

      <div className={styles.container}>
        <div className={styles.timeline}>
          <div className={styles.stepNumber}>5</div>
          <div className={styles.lineVertical} />
          <div className={styles.rotatedLabel}>Свяжитесь с нами</div>
        </div>

        <div>
          <div className={styles.header}>
            <h3 className={styles.titleSecondary}>
              Давайте начнем сотрудничество
            </h3>
            <h4 className={styles.titlePrimary}>
              Мы готовы к следующему вызову. Расскажите, что хотите построить
            </h4>
            <button className={styles.viewAllBtn}>
              Обсудить проект
              <span className={styles.viewAllBtnIcon} />
            </button>
          </div>

          <div className={styles.cardsGrid}>
            {cards.map((c, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}>
                  {/* сюда SVG-иконку по шаблону */}
                  {c.icon}
                </div>
                <h5 className={styles.cardTitle}>{c.title}</h5>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
