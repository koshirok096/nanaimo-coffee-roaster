import Container from '../Container';

import styles from './Footer.module.css';

const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        &copy; Nanaimo Coffee Roaster 2022
      </Container>
    </footer>
  )
}

export default Footer;