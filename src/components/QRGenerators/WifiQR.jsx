import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/QrStyles.module.css';

const WifiQR = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ssid: '',
    password: '',
    hidden: false,
    encryption: 'WPA'
  });

  const generateWifiQR = () => {
    const { ssid, password, hidden, encryption } = formData;
    return `WIFI:T:${encryption};S:${ssid};P:${password};${hidden ? 'H:true;' : ''};`;
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
            type="text"
            placeholder="Nombre de la red (SSID)"
            value={formData.ssid}
            onChange={(e) => setFormData({...formData, ssid: e.target.value})}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <select
            value={formData.encryption}
            onChange={(e) => setFormData({...formData, encryption: e.target.value})}
          >
            <option value="WPA">WPA/WPA2</option>
            <option value="WEP">WEP</option>
            <option value="nopass">Sin contraseña</option>
          </select>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={formData.hidden}
              onChange={(e) => setFormData({...formData, hidden: e.target.checked})}
            />
            Red oculta
          </label>
        </div>
        
        {formData.ssid && (
          <div className={styles.qrWrapper}>
            <QRCodeSVG 
              value={generateWifiQR()} 
              size={300}
              bgColor="white"
              fgColor="#0f3460"
              level="H"
              includeMargin={true}
            />
            <p>Escanea para conectarte a la red WiFi</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WifiQR;