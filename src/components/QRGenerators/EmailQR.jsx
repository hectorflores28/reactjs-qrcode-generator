import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/QrStyles.module.css';

const EmailQR = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const generateEmailQR = () => {
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Asunto"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Mensaje"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="4"
          />
        </div>
        
        {email && (
          <div className={styles.qrWrapper}>
            <QRCodeSVG 
              value={generateEmailQR()} 
              size={300}
              bgColor="white"
              fgColor="#0f3460"
              level="H"
              includeMargin={true}
            />
            <p>Escanea para enviar correo</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailQR;