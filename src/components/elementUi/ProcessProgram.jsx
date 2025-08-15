// import React from 'react';
// import styles from './progress.module.css';

// const events = [
//   { id: 1, pos: 8, side: 'top', text: 'Анализ рынка, pain points, сбор гипотез и формирование AI-концепта' },
//   { id: 2, pos: 28, side: 'bottom', text: 'Быстрая проверка гипотез: от baseline моделей до proof-of-concept' },
//   { id: 3, pos: 50, side: 'top', text: 'Создание минимально жизнеспособного AI-продукта с фокусом на метрики' },
//   { id: 4, pos: 72, side: 'bottom', text: 'Создание минимально жизнеспособного AI-продукта с фокусом на метрики' },
//   { id: 5, pos: 92, side: 'top', text: 'Оптимизация, рост, привлечение инвестиций и выход на рынок' },
// ];

// export default function ProgressTimeline() {
//   return (
//     <section className={styles.wrapper} aria-label="Timeline">
//       <div className={styles.container}>
//         <div className={styles.line} />

//         {events.map((e) => (
//           <div
//             key={e.id}
//             className={`${styles.marker} ${e.side === 'top' ? styles.topMarker : styles.bottomMarker}`}
//             style={{ left: `${e.pos}%` }}
//             aria-hidden={false}
//           >
//             <div className={styles.connector} aria-hidden="true" />
//             <div className={styles.dot} aria-hidden="true" />
//             <div className={`${styles.label} ${e.side === 'top' ? styles.labelTop : styles.labelBottom}`}>
//               <div className={styles.labelInner}>{e.text}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






import React from 'react';
import styles from './progress.module.css';
import processMobile from '../../assets/icons/processMobile.svg';

const events = [
  { id: 1, pos: 8, side: 'top', text: 'Анализ рынка, pain points, сбор гипотез и формирование AI-концепта' },
  { id: 2, pos: 28, side: 'bottom', text: 'Быстрая проверка гипотез: от baseline моделей до proof-of-concept' },
  { id: 3, pos: 50, side: 'top', text: 'Создание минимально жизнеспособного AI-продукта с фокусом на метрики' },
  { id: 4, pos: 72, side: 'bottom', text: 'Создание минимально жизнеспособного AI-продукта с фокусом на метрики' },
  { id: 5, pos: 92, side: 'top', text: 'Оптимизация, рост, привлечение инвестиций и выход на рынок' },
];

export default function ProgressTimeline({ isMobile }) {
  if (isMobile) {
    return (
      <div className={styles.mobileContainer}>
        {events.map((e, index) => (
          <div key={e.id} className={styles.mobileStep}>
            {/* Заменяем иконку на точку для последнего элемента */}
            {index === events.length - 1 ? (
              <div className={styles.mobileLastDot} />
            ) : (
              <img src={processMobile} alt="" />
            )}
            <span className={styles.mobileText}>{e.text}</span>
          </div>
        ))}
      </div>
    );
  }

  // Десктопная версия остается без изменений
  return (
    <section className={styles.wrapper} aria-label="Timeline">
      <div className={styles.container}>
        <div className={styles.line} />

        {events.map((e) => (
          <div
            key={e.id}
            className={`${styles.marker} ${e.side === 'top' ? styles.topMarker : styles.bottomMarker}`}
            style={{ left: `${e.pos}%` }}
            aria-hidden={false}
          >
            <div className={styles.connector} aria-hidden="true" />
            <div className={styles.dot} aria-hidden="true" />
            <div className={`${styles.label} ${e.side === 'top' ? styles.labelTop : styles.labelBottom}`}>
              <div className={styles.labelInner}>{e.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}