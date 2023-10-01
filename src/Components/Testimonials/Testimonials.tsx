import Image from 'next/image';
import styles from './Testimonials.module.scss';
import { ana, carlos, joao, maria } from '@/assets';
import { motion } from 'framer-motion';


export const testimonials = {
  title: 'O que nossos clientes estão dizendo',
  list: [
    {
      avatar: (
        <Image src={ana} alt='Ana Silva' width={74} height={74} />
      ),
      name: 'Ana Silva',
      role: 'Advogada',
      comment:
        'Adorei a praticidade do aplicativo do DSF Bank. Tudo o que eu preciso está ali na tela do meu celular, sem complicação.',
    },
    {
      avatar: (
        <Image src={joao} alt='João Santos' width={74} height={74} />
      ),
      name: 'João Santos',
      role: 'Empresário',
      comment:
        'O programa de pontos do DSF Bank é incrível! Com os pontos que acumulo nas minhas transações, posso fazer compras em lojas parceiras. É uma ótima maneira de economizar!',
    },
    {
      avatar: (
        <Image src={maria} alt='Maria Ferreira' width={74} height={74} />
      ),
      name: 'Maria Ferreira',
      role: 'Estudante',
      comment:
        'Estava procurando por um banco digital seguro e confiável e encontrei o DSF Bank. Amei a facilidade de abrir uma conta e agora faço todas as minhas transações pelo aplicativo.',
    },
    {
      avatar: (
        <Image src={carlos} alt='Carlos Gomes' width={74} height={74} />
      ),
      name: 'Carlos Gomes',
      role: 'Designer gráfico',
      comment:
        'Eu estava cansado de ter que ir até o banco toda semana para resolver minhas pendências. Com o DSF Bank, agora consigo fazer tudo pelo celular, de forma prática e segura.',
    },
  ],
};

export function Testimonials() {
  const { title, list } = testimonials

  const motionProps = {
    offScreen: {
      opacity: 0,
      y: 50,
    },
    onScreen: (i = 2) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
        delay: 0.1 * i,
      }
    })
  }

  const renderList = list.map((item, i) => (
    <motion.li 
    variants={motionProps} 
    viewport={{ once:true}}
    initial='offScreen'
    whileInView='onScreen'
    custom={i}
    key={i} 
    className={styles.item}>
      <div className={styles.heading}>
        {item.avatar}
        <div>
          <h3 className='p'>{item.name}</h3>
          <span className='p light'>{item.role}</span>
        </div>
      </div>
      <p className='light'>{item.comment}</p>
    </motion.li>
  ))

  return (
    <section id='testimonials' className={styles.testimonials}>
      <motion.h2 
      variants={motionProps} 
      viewport={{ once:true}}
      initial='offScreen'
      whileInView='onScreen'
      className='title'>{title}
      </motion.h2>
      <ul className={styles.list}>{renderList}</ul>
    </section>
  )
}
