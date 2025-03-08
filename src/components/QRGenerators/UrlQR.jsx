import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import styles from './styles/QrStyles.module.css';
import { ThemeContext } from '../../context/ThemeContext';

const UrlQR = () => {
  const { colors } = useContext(ThemeContext);
  const [url, setUrl] = useState('');

  return (
    <div className={styles.container} style={{ background: colors.gradient }}>
      <Link to="/" className={styles.backButton}>← Volver al menú</Link>
      
      <div className={styles.formContainer}>
        <input
          type="url"
          placeholder="https://ejemplo.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={styles.inputField}
        />

        {url && (
          <div className={styles.qrPreview}>
            <QRCodeSVG
              value={url}
              size={256}
              fgColor={colors.accent}
              bgColor="transparent"
            />
            <p className={styles.qrCaption}>Escanea para visitar el sitio</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlQR;