import Link from 'next/link';
import styles from './Footer.module.scss';
import Image from 'next/image';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTwitter, FaLinkedin } from 'react-icons/fa'; // Usei ícones de exemplo, substitua pelo que você desejar.

export const footer = {
  description: 'Transformando vidas com tecnologia e inovação.',
  links: [
    { name: 'Perguntas frequentes', url: '#' },
    { name: 'Política de Privacidade', url: '#' },
    { name: 'Termos de Uso', url: '#' },
    { name: 'Trabalhe Conosco', url: '#' },
    { name: 'Fale Conosco', url: '#' },
  ],
  contact: [
    'contato@dsfbank.com.br',
    '(00) 1234-5678',
    'Rua Fictícia, 1234, Bairro Fictício, Cidade Fictícia - Estado Fictício',
  ],
  copy: 'Copyright © 2023 DSF Bank. Todos os direitos reservados.',
  social: [
    { component: <AiOutlineInstagram />, url: '#' },
    { component: <FaTwitter />, url: '#' },
    { component: <FaLinkedin />, url: '#' },
  ],
};

export function Footer() {
  const { description, links, contact, copy, social } = footer;

  const renderLinks = links.map((link, i) => (
    <li key={i} className='p light'>
      <Link href={link.url}>{link.name}</Link>
    </li>
  ));

  const renderContacts = contact.map((contact, i) => (
    <li key={i} className='p light'>
      {contact}
    </li>
  ));

  const renderSocial = social.map((social, i) => (
    <li key={i}>
      <Link href={social.url}>{social.component}</Link>
    </li>
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles.container1}>
        <div className={styles.column1}>
          <Link href='/'>
            <Image src='/logo.svg' alt='dsf bank' width={50} height={30} />
          </Link>
          <p className='light'>{description}</p>
        </div>
        <div className={styles.column2}>
          <h2 className='p'>Links úteis</h2>
          <ul>{renderLinks}</ul>
        </div>
        <div className={styles.column3}>
          <h2 className='p'>Contato</h2>
          <ul>{renderContacts}</ul>
        </div>
      </div>
      <div className={styles.container2}>
        <span className='p light'>{copy}</span>
        <ul>{renderSocial}</ul>
      </div>
    </footer>
  );
}
