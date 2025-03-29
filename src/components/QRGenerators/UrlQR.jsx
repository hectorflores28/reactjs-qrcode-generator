import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/QrStyles.module.css';

const UrlQR = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');

  return (
    <div className={styles.fullscreenContainer}>
      <div className={styles.particles}>
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      <button onClick={() => navigate('/')} className={styles.backButton}>
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      
      <div className={styles.formContainer}>
        <div className={styles.inputGroup}>
          <input
            type="url"
            placeholder="URL (ej: https://www.ejemplo.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        
        {url && (
          <div className={styles.qrWrapper}>
            <QRCodeSVG 
              value={url} 
              size={300}
              bgColor="white"
              fgColor="#0f3460"
              level="H"
              includeMargin={true}
            />
            <p>Escanea para visitar la página</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlQR;