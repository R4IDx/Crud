import Link from 'next/link';
import styles from './navbar.module.css'; 

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/page2" className={styles.link} passHref>
        Start Again
      </Link>
    </nav>
  );
};

