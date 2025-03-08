import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import styles from './styles/QrStyles.module.css';
import { ThemeContext } from '../../context/ThemeContext';

const EmailQR = () => {
  const { colors } = useContext(ThemeContext);
  const [emailData, setEmailData] = useState({
    address: '',
    subject: ''
  });

  const generateMailTo = () => {
    return `mailto:${emailData.address}?subject=${encodeURIComponent(emailData.subject)}`;
  };

  return (
    <div className={styles.container} style={{ background: colors.gradient }}>
      <Link to="/" className={styles.backButton}>← Volver al menú</Link>
      
      <div className={styles.formContainer}>
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          value={emailData.address}
          onChange={(e) => setEmailData({...emailData, address: e.target.value})}
          className={styles.inputField}
        />
        
        <input
          type="text"
          placeholder="Asunto del correo"
          value={emailData.subject}
          onChange={(e) => setEmailData({...emailData, subject: e.target.value})}
          className={styles.inputField}
        />

        {emailData.address && (
          <div className={styles.qrPreview}>
            <QRCodeSVG
              value={generateMailTo()}
              size={256}
              fgColor={colors.accent}
              bgColor="transparent"
            />
            <p className={styles.qrCaption}>Escanea para enviar correo</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailQR;