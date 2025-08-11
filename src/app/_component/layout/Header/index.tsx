'use client';

import { useEffect, useState } from 'react';
import List from '@/app/_asset/icon/list.svg';
import Logo from '@/app/_asset/icon/logo.svg';
import { Button } from '@/app/_component/common/Button';
import styles from './index.module.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // 50px 이상 스크롤했을 때 상태 변경
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <h1 className={styles.logo}>
        <Button variant="tertiary" size="large" href="/">
          <Logo alt="logo" width={20} height={20} />
          <p>청약닷컴</p>
        </Button>
      </h1>
      <nav className={styles['navigation']}>
        <ul className={styles['navigation__list']}>
          <li>
            <Button variant="tertiary" size="large" shape="icon" href="/list">
              <List width={20} height={20} alt="List" />
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
