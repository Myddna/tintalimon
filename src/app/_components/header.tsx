import Image from 'next/image';
import Link from 'next/link';
import styles from './header-styles.module.css';

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link
        href="/"
        className="rounded-lg aspect-meishi p-2 bg-lemon-400 hover:bg-amber-400"
      >
        <Image
          className={styles.header__logo}
          src={'/TintaLimon-Web.svg'}
          alt="Tinta Limón"
          width={100}
          height={62}
        />
      </Link>
    </h2>
  );
};

export default Header;
