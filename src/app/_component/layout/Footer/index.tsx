import styles from './index.module.css';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>{year} cheongyak.com © All Right Reserved.</p>
    </footer>
  );
};
