// import React from 'react';
// import styles from '../styles/Process.module.css';
// import ProcessProgram from './elementUi/ProcessProgram';

// export default function Process() {
//   return (
//     <section className={styles.processSection}>
//       <div className={styles.processContainer}>
//         {/* Обертка для элементов боковой панели */}
//         <div className={styles.timeline}>
//           <div className={styles.stepNumber}>2</div>
//           <div className={styles.lineVertical}></div>
//           <div className={styles.rotatedLabel}>Наш подход</div>
//         </div>

//         <div className={styles.processWrapper} aria-label='Process'>
//           <div>
//             <h2 className={styles.titleMain}>
//               Как мы превращаем идеи в AI-продукты
//             </h2>
//             <h3 className={styles.titleSecondary}>
//               Запускаем AI-продукты с фокусом на рост и валидацию
//             </h3>
//           </div>
//           <div>
//             <ProcessProgram />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import React, { useState, useEffect } from 'react';
import styles from '../styles/Process.module.css';
import ProcessProgram from './elementUi/ProcessProgram';

export default function Process() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.processSection}>
      <div className={styles.processContainer}>
        <div className={styles.timeline}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.lineVertical}></div>
          <div className={styles.rotatedLabel}>Наш подход</div>
        </div>

        <div className={styles.processWrapper} aria-label='Process'>
          <div>
            <h2 className={styles.titleMain}>
              Как мы превращаем идеи в AI-продукты
            </h2>
            <h3 className={styles.titleSecondary}>
              Запускаем AI-продукты с фокусом на рост и валидацию
            </h3>
          </div>
          <div>
            <ProcessProgram isMobile={isMobile} />
          </div>
        </div>
      </div>
    </section>
  );
}
