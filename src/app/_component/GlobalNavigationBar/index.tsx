import Image from 'next/image';
import Logo from '@/app/icon.svg';
import styles from './index.module.css';

export const GlobalNavigationBar = () => {
  return (
    <nav className={styles['navigation']}>
      <ul className={styles['navigation__list']}>
        <li>List</li>
        <li>
          <Image src={Logo} alt="logo" width={32} height={32} />
        </li>
        <li>User</li>
      </ul>
    </nav>
  );
};
