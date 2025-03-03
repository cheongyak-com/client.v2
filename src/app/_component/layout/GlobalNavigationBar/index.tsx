import List from '@/app/_asset/icon/list.svg';
import Logo from '@/app/_asset/icon/logo.svg';
import User from '@/app/_asset/icon/user.svg';
import { Button } from '@/app/_component/common/Button';
import styles from './index.module.css';

export const GlobalNavigationBar = () => {
  return (
    <nav className={styles['navigation']}>
      <ul className={styles['navigation__list']}>
        <li>
          <Button variant="tertiary" href="/">
            <List width={24} height={24} alt="list" />
          </Button>
        </li>
        <li>
          <Logo alt="logo" width={32} height={32} />
        </li>
        <li>
          <Button variant="tertiary" href="/">
            <User width={24} height={24} alt="User" />
          </Button>
        </li>
      </ul>
    </nav>
  );
};
