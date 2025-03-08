import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import styles from './styles/QrStyles.module.css';
import { ThemeContext } from '../../context/ThemeContext';

const ContactQR = () => {
  const { colors } = useContext(ThemeContext);
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const generateVCard = () => {
    return `BEGIN:VCARD\nVERSION:3.0\nN:${contactData.name}\nTEL:${contactData.phone}\nEMAIL:${contactData.email}\nEND:VCARD`;
  };

  return (
    <div className={styles.container} style={{ background: colors.gradient }}>
      <Link to="/" className={styles.backButton}>← Volver</Link>
      <div className={styles.formContainer}>
        <input 
          type="text" 
          placeholder="Nombre" 
          onChange={(e) => setContactData({...contactData, name: e.target.value})}
          className={styles.inputField}
        />
        {/* Agrega más inputs para teléfono y email */}
        {contactData.name && (
          <div className={styles.qrPreview}>
            <QRCodeSVG value={generateVCard()} size={256} fgColor={colors.accent} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactQR;