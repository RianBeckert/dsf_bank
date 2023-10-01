import React from 'react';
import styles from './Experience.module.scss';

export function Experience() {
  return (
    <section className={styles.experience}>
      <div className={`${styles.content} ${styles.blue}`}>
        <div className={styles.color}></div>
        <h2 className='title'>10M</h2>
        <h3 className='p'>De usuários satisfeitos que confiam no DSF como seu banco digital de escolha.</h3>
      </div>
      <div className={`${styles.content} ${styles.orange}`}>
        <div className={styles.color}></div>
        <h2 className='title'>6 +</h2>
        <h3 className='p'>Anos de experiência oferecendo serviços bancários inovadores, seguros e confiáveis.</h3>
      </div>
    </section>
  );
}



