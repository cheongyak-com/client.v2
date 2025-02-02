import Image from 'next/image';
import Logo from '../../icon.svg';
import styles from './index.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Image src={Logo} alt="logo" width={36} height={36} />
        <p>청약닷컴</p>
      </h1>
      <nav className={styles['navigation']}>
        <ul className={styles['navigation__list']}>
          <li>List</li>
          <li>User</li>
        </ul>
      </nav>
    </header>
  );
};
