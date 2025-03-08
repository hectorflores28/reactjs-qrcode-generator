import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import styles from './styles/QrStyles.module.css';

const UrlQR = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');

  return (
    <div className={styles.fullscreenContainer}>
      <button onClick={() => navigate('/')} className={styles.backButton}>
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      
      <div className={styles.formContainer}>
        <div className={styles.inputGroup}>
          <input
            type="url"
            placeholder="https://ejemplo.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={styles.inputField}
        />
        </div>

        {url && (
          <div className={styles.qrWrapper}>
            <QRCodeSVG value={url} size={300} />
            <p className={styles.qrCaption}>Escanea para visitar el sitio</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlQR;