import styles from './index.module.css';

export const ListItem = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.tags}>
            <p className={styles.tag}>APT</p>
            <p className={styles.tag}>국민</p>
            <p className={styles.tag}>경기</p>
          </div>
          <h3 className={styles.title}>왕숙 푸르지오 더 퍼스트 1단지 공공분양주택(본청약)</h3>
        </div>
        <div className={styles.info}>
          <p>공고 2025-07-31</p>
          <p>접수 2025-08-11 ~ 2025-08-13</p>
          <p>발표 2025-08-20</p>
        </div>
      </div>
    </div>
  );
};
