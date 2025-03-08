import { Link } from 'react-router-dom';
import styles from './MainMenu.module.css';

const MainMenu = () => {
  return (
    <nav className={styles.menuContainer}>
      <ul>
        <li><Link to="/contact">Contacto QR</Link></li>
        <li><Link to="/email">Email QR</Link></li>
        <li><Link to="/url">URL QR</Link></li>
        <li><Link to="/wifi">WiFi QR</Link></li>
      </ul>
    </nav>
  );
};

export default MainMenu;