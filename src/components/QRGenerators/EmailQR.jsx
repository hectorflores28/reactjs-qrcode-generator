import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/QrStyles.module.css';

const EmailQR = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

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
            type="email"
            placeholder="correo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.singleInput}
          />
          </div>
          
          {email && (
            <div className={styles.qrWrapper}>
              <QRCodeSVG value={`mailto:${email}`} size={300} />
              <p className={styles.qrCaption}>Escanea para enviar email</p>
            </div>
          )}
        </div>
      </div>
    );
  };

export default EmailQR;