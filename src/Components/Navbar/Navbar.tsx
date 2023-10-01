import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';


interface Link {
    url: string;
    name: string;
  }

  const links: Link[] = [
    { name: 'Diferenciais', url: '#resources' },
    { name: 'Programa de pontos', url: '#rewards' },
    { name: 'Depoimentos', url: '#testimonials' },
  ];

  const itemsMotionProps = {
    open: { opacity:1, x: 0},
    closed: { opacity: 0, x: 50}
  }

  const renderLinks = links.map((link, i) => (
    <motion.li variants={itemsMotionProps} key={i}>
      <a href={link.url}>{link.name}</a>
    </motion.li>
));


export function Navbar() {
    const [isMobile, setIsMobile] = useState(false)

    const toggleIsMobile = () => setIsMobile((prevState) => !prevState)

    const listMotionProps = {
        open: { opacity:1, x: 0},
        closed: { opacity: 0, x: '28rem'}
    }

    return (
        <section className={styles.navbar}>
            <div>
                <Link href='/'>
                    <Image src='/logo.svg' alt='DSF Bank' width={50} height={30}/>
                </Link>
            </div>
            <nav>
                <ul className={styles.links}>{renderLinks}</ul>
                <AiOutlineMenuUnfold onClick={toggleIsMobile} className={styles.menu}/>
                <motion.ul variants={listMotionProps} 
                animate={isMobile ? 'open' : 'closed'}
                transition={{
                    when: 'beforeChildren',
                    staggerChildren: 0.2,
                    type: 'just',
                    duration: 0.3,
                }} 
                className={styles['mobile-links']}>
                    <AiOutlineClose onClick={toggleIsMobile} />
                    {renderLinks}
                </motion.ul>
            </nav>
        </section>
    )
}