// Home.jsx (sin cambios en el componente)
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Home = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <div className={styles.menuContainer}>
      <div className={styles.linksContainer}>
        <Link 
          to="/contact" 
          className={styles.linkItem} 
          style={{ color: colors.accent }}
        >
          Contacto
        </Link>
        <Link 
          to="/email" 
          className={styles.linkItem}
          style={{ color: colors.accent }}
        >
          Email
        </Link>
        <Link 
          to="/url" 
          className={styles.linkItem}
          style={{ color: colors.accent }}
        >
          URL
        </Link>
        <Link 
          to="/wifi" 
          className={styles.linkItem}
          style={{ color: colors.accent }}
        >
          WiFi
        </Link>
      </div>
    </div>
  );
};

export default Home;