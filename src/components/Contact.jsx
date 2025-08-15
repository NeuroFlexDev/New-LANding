import React from 'react';
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
  return (
    <section className={styles.contactSection}>
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
              <h3 className={styles.titleSecondary}>
                Давайте начнем сотрудничество
              </h3>
              <h4 className={styles.titlePrimary}>
                Мы готовы к следующему вызову. Расскажите, что хотите построить
              </h4>
            </div>
            <button className={styles.viewAllBtn}>
              Обсудить проект
              <img src={arrowLeft} alt="" />
            </button>
          </div>

          <div className={styles.cardsGrid}>
            {cards.map((c, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}>
                  <img src={c.icon} alt="social network" />
                </div>
                <div>
                  <h5 className={styles.cardTitle}>{c.title}</h5>
                  <p className={styles.cardDesc}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
