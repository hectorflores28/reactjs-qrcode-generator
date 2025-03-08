import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Home = () => {
  const { colors } = useContext(ThemeContext);
  
  return (
    <div style={{ 
      color: colors.text,
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Bienvenido al Generador de QRs
      </h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
        Selecciona una opción del menú lateral para comenzar
      </p>
    </div>
  );
};

export default Home;