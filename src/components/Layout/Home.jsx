// Home.jsx (sin cambios en el componente)
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const menuItems = [
  { path: '/contact', label: 'Contacto', icon: '👤' },
  { path: '/email', label: 'Email', icon: '📧' },
  { path: '/url', label: 'URL', icon: '🔗' },
  { path: '/wifi', label: 'WiFi', icon: '📶' }
];

const Home = () => {
  const { colors, spacing, transitions } = useContext(ThemeContext);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className={styles.menuContainer}>
      <div className={styles.linksContainer}>
        {menuItems.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className={styles.linkItem}
            style={{
              color: colors.accent,
              marginBottom: spacing.medium,
              transition: transitions.default,
              transform: hoveredItem === index ? 'translateX(10px)' : 'translateX(0)',
              opacity: hoveredItem === null || hoveredItem === index ? 1 : 0.7
            }}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className={styles.icon}>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;