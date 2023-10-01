import { CreditCardComponent } from './CreditCard'
import styles from './Header.module.scss'
import { motion } from 'framer-motion';

export function Header() {

    const motionProps = (initialX: number, finalX: number) => ({
        initial: { opacity: 0, x: initialX },
        whileInView: { opacity: 1, x: finalX },
        viewport: { once: true },
        transition: {
          type: 'spring',
          bounce: 0.4,
          duration: 1,
        },
    })
    
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <motion.div {...motionProps(-100, 0)} className={styles.content}>
                    <span>__ confiado por milhões de usuários</span>
                    <h1>Seja Digital Seja DSF Bank</h1>
                    <p>Somos a união da tecnologia com a confiança que você procura em um banco. Nós oferecemos serviços bancários digitais seguros e inovadores, para ajudar você a se conectar com o futuro financeiro e aproveitar cada oportunidade.</p>
                </motion.div>
                <motion.div {...motionProps(-100, 0)}>
                    <CreditCardComponent />
                </motion.div>
            </div>
        </header>
    )
}