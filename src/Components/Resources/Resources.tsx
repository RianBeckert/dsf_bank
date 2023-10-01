import styles from './Resources.module.scss';
import { AiOutlineHeart, AiOutlineLock } from 'react-icons/ai';
import { MdComputer } from 'react-icons/md';
import { motion } from 'framer-motion';

const heart = <AiOutlineHeart />;
const locker = <AiOutlineLock />;
const computer = <MdComputer />;

export function Resources() {

  const motionProps = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay: 0.1,
    },
}

  return (
    <motion.section {...motionProps} id='resources' className={styles.resources}>
      <div className={styles.container}>
        <h2 className='title'>Nossos Diferenciais</h2>
        <h4 className='p light'>Conheça os recursos que nos diferenciam dos demais bancos e como estamos comprometidos em oferecer a você a melhor experiência financeira possível.</h4>
        <ul className={styles.list}>
          <li  className={styles.item}>
            {heart}
            <h3 className='p'>Segurança de ponta a ponta</h3>
            <p className='light'>Conte com a mais avançada tecnologia de segurança para total segurança dos seus dados.</p>
          </li>
          <li className={styles.item}>
            {locker}
            <h3 className='p'>Experiência de usuário inovadora</h3>
            <p className='light'>Estamos sempre empenhados em tornar a interação com nossos serviços o mais fácil e agradável possível.</p>
          </li>
          <li className={styles.item}>
            {computer}
            <h3 className='p'>Atendimento excepcional</h3>
            <p className='light'>Nossa equipe está pronta para ajudá-lo a solucionar qualquer dúvida ou problema.</p>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
