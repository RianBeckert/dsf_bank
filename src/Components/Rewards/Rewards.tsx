import { EarthComponent } from './Earth'
import styles from './Rewards.module.scss'
import { motion } from 'framer-motion';

export function Rewards() {

    const motionProps = (initialX: number, finalX: number) => ({
        initial: { opacity: 0, x: initialX },
        whileInView: { opacity: 1, x: finalX },
        viewport: { once: true },
        transition: {
          type: 'spring',
          bounce: 0.4,
          duration: 1,
          delay: 0.1,
        },
    })
    
    return (
        <section id='rewards' className={styles.rewards}>
            <motion.div {...motionProps(-100, 0)} className={styles.content}>
                <h2 className='title'>DSF Rewards - O Programa de Pontos DSF Bank</h2>
                <ul>
                    <li  className={styles.item}>
                        <h3 className='p'>Acumule pontos e troque por vantagens</h3>
                        <p className='light'>Com o DSF Rewards você acumule pontos a cada real gasto, podendo trocá-los por passagens aéreas e vantagens exclusivas em nossa loja virtual.</p>
                    </li>
                    <li  className={styles.item}>
                        <h3 className='p'>Como funciona</h3>
                        <p className='light'>Você acumula pontos a cada transação realizada com seu cartão de crédito. Além disso, quanto mais você usar os serviços do DSF Bank, mais pontos acumula. É simples assim!</p>
                    </li>
                </ul>
            </motion.div>
            <div>
                <EarthComponent />
            </div>
        </section>
    )
}