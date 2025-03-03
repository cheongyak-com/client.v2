import List from '@/app/_asset/icon/list.svg';
import Logo from '@/app/_asset/icon/logo.svg';
import User from '@/app/_asset/icon/user.svg';
import { Button } from '@/app/_component/common/Button';
import styles from './index.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Logo alt="logo" width={36} height={36} />
        <p>청약닷컴</p>
      </h1>
      <nav className={styles['navigation']}>
        <ul className={styles['navigation__list']}>
          <li>
            <Button variant="tertiary" href="/">
              <List width={24} height={24} alt="List" />
            </Button>
          </li>
          <li>
            <Button variant="tertiary" href="/">
              <User width={24} height={24} alt="User" />
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
