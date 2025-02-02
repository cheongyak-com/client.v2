import styles from './index.module.css';

export const GlobalNavigationBar = () => {
  return (
    <nav className={styles['global-navigation-bar']}>
      <ul className={styles['global-navigation-bar__list']}>
        <li>List</li>
        <li>Home</li>
        <li>User</li>
      </ul>
    </nav>
  );
};
