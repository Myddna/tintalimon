import { FaInstagram } from "react-icons/fa6";
import styles from './mainPage.module.css';

export default function Home() {
  const cardWidth = "w-80 md:w-96"
  const commonCardStyle = `shadow-md rounded-lg absolute aspect-meishi ${cardWidth} ` +
    "t-0 r-0 b-0 l-0 p-8 flex flex-col items-center justify-center " +
    "bg-amber-400";
  return (
    <div className={styles.homeWrapper}>
      <main className={styles.main}>
        {/* Flipping group */}
        <div className={`${styles.card__content} relative ${cardWidth} aspect-meishi text-center transition-transform duration-1000`}>
          {/* Front */}
          <div className={`${styles.card__front} ${commonCardStyle} text-white`}>
            <h1 className="text-center text-6xl">Tinta<br />Limón</h1>
          </div>

          {/* back */}
          <div className={`${styles.card__back} ${commonCardStyle} text-black text-lg`}>
            <p className="mb-2"><strong>Relief printmaking</strong></p>
            <ul>
              <li>Mokuhanga (木版画)</li>
              <li>Linocut</li>
            </ul>
          </div>
        </div>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 pt-3 text-lg"
          href="https://instagram.com/tinta.limon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
          Instagram
        </a>
      </main>
    </div>
  );
}
