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
        ← Volver al Menú
      </button>
      
      <div className={styles.formContainer}>
        <h2>QR de Email</h2>
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.singleInput}
        />
        
        {email && (
          <div className={styles.qrWrapper}>
            <QRCodeSVG value={`mailto:${email}`} size={300} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailQR;