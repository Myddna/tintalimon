import { FaInstagram } from 'react-icons/fa6';
import styles from './mainPage.module.css';
import { SiKofi } from 'react-icons/si';
import Image from 'next/image';

export default function Home() {
  const cardWidth = 'w-80 md:w-96';
  const commonCardStyle =
    `shadow-md rounded-lg absolute aspect-meishi ${cardWidth} ` +
    't-0 r-0 b-0 l-0 p-8 flex flex-col items-center justify-center ' +
    'bg-lemon-400';
  return (
    <div className={styles.homeWrapper}>
      <main className={styles.main}>
        {/* Flipping group */}
        <div
          className={`${styles.card__content} relative ${cardWidth} aspect-meishi text-center transition-transform duration-1000`}
        >
          {/* Front */}
          <div
            className={`${styles.card__front} ${commonCardStyle} text-white`}
          >
            <Image
              className={styles.card__logo}
              src={'/TintaLimon-Web.svg'}
              alt="Tinta Limón"
              width={200}
              height={125}
            />
            <h1>
              <span className="sr-only">Tinta Limón</span>
            </h1>
          </div>

          {/* back */}
          <div
            className={`${styles.card__back} ${commonCardStyle} text-black text-lg`}
          >
            <div className="mb-4 bg-paleblue-400 px-4 py-1 rounded-md font-bold">
              Relief printmaking
            </div>
            <ul>
              <li>Mokuhanga (木版画)</li>
              <li>Linocut</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            className="flex items-center gap-1 hover:underline hover:underline-offset-4 hover:text-cinnamon-400 pt-3 text-sm"
            href="https://instagram.com/tinta.limon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            Instagram
          </a>
          <a
            className="flex items-center gap-1 hover:underline hover:underline-offset-4 hover:text-cinnamon-400 pt-3 text-sm"
            href="https://ko-fi.com/tintalimon/shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiKofi />
            Buy my prints
          </a>
        </div>
        <Image className={'fixed bottom-4 right-4'} src={'/logo-sello-rojo.svg'} alt='Tinta Limón Seal' width={51} height={76} />
      </main>
    </div>
  );
}
