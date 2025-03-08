import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import styles from './styles/QrStyles.module.css';
import { ThemeContext } from '../../context/ThemeContext';

const WifiQR = () => {
  const navigate = useNavigate();
  const { colors } = useContext(ThemeContext);
  const [wifiData, setWifiData] = useState({ 
    ssid: '', 
    password: '', 
    encryption: 'WPA' 
  });

  const generateWifiString = () => {
    return `WIFI:S:${wifiData.ssid};T:${wifiData.encryption};P:${wifiData.password};;`;
  };

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
            type="text"
            placeholder="Nombre de la red"
          value={wifiData.ssid}
          onChange={(e) => setWifiData({...wifiData, ssid: e.target.value})}
          className={styles.inputField}
        />
          <input
            type="password"
            placeholder="Contraseña"
          value={wifiData.password}
          onChange={(e) => setWifiData({...wifiData, password: e.target.value})}
          className={styles.inputField}
        />
        </div>

        {wifiData.ssid && (
          <div className={styles.qrWrapper}>
            <QRCodeSVG value={generateWifiString()} size={300} />
            <p className={styles.qrCaption}>Escanea para conectar al WiFi</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WifiQR;