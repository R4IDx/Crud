import styles from "./page2.module.css";
import Navbar from './navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <div>
          <Navbar />
        </div>
        <div>
        <img className={styles.image} src="/pizza.jpeg" alt="Pizza" />
        <p className={styles.text}>Da ich nicht genau wusste was ich auf der zweiten Seite noch zeigen sollte da alle CRUD operations auf seite1 abgehandelt werden, hier ein Bild einer Pizza in der Hoffnung das Sie hunger bekommen :D</p>
        </div>
       
      </div>
    </main>
  );
}
