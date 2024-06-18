import Link from 'next/link';
import styles from './Navbar.module.css'; 

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/page" className={styles.link} passHref>
        CRUD-Operations
      </Link>
      <Link href="/page2" className={styles.link} passHref>
        Page2
      </Link>
    </nav>
  );
};

