import { ListItem } from './_component/ListItem';
import styles from './page.module.css';

export default function List() {
  return (
    <div className={styles.wrapper}>
      {[...Array(30)].map((_, index) => (
        <ListItem key={index} />
      ))}
    </div>
  );
}
