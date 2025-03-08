import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/QrStyles.module.css';

const ContactQR = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    empresa: '',
    extension: ''
  });

  const generateVCard = () => {
    return `BEGIN:VCARD
VERSION:3.0
N:${formData.apellido};${formData.nombre}
FN:${formData.nombre} ${formData.apellido}
TEL;TYPE=WORK,VOICE:${formData.telefono}
EMAIL:${formData.email}
ORG:${formData.empresa}
TITLE:${formData.extension}
END:VCARD`;
  };

  return (
    <div className={styles.fullscreenContainer}>
      <button onClick={() => navigate('/')} className={styles.backButton}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#4db8ff" strokeWidth="2">
          <circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.3)" />
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      
      <div className={styles.formContainer}>
        <div>
          <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={(e) => setFormData({...formData, nombre: e.target.value})}
          />
          <input
            type="text"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={(e) => setFormData({...formData, apellido: e.target.value})}
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={(e) => setFormData({...formData, telefono: e.target.value})}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input
            type="text"
            placeholder="Empresa"
            value={formData.empresa}
            onChange={(e) => setFormData({...formData, empresa: e.target.value})}
          />
          <input
            type="text"
            placeholder="Extensión"
            value={formData.extension}
            onChange={(e) => setFormData({...formData, extension: e.target.value})}
          />
        </div>
        </div>
        
        {formData.nombre && (
          <div className={styles.qrWrapper}>
            <QRCodeSVG value={generateVCard()} size={300} />
            <p>Escanea para guardar contacto</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactQR;
