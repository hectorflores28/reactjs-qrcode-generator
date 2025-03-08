import { Link } from 'react-router-dom';
import styles from './MainMenu.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const MainMenu = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <nav className={styles.menuContainer}>
      <ul>
        <li>
          <Link to="/contact">
            <span className={styles.menuSubtitle} style={{ color: colors.accent }}>
              Contacto
            </span>
          </Link>
        </li>
        <li>
          <Link to="/email">
            <span className={styles.menuSubtitle} style={{ color: colors.accent }}>
              Email
            </span>
          </Link>
        </li>
        <li>
          <Link to="/url">
            <span className={styles.menuSubtitle} style={{ color: colors.accent }}>
              URL
            </span>
          </Link>
        </li>
        <li>
          <Link to="/wifi">
            <span className={styles.menuSubtitle} style={{ color: colors.accent }}>
              WiFi
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;