import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import styles from './styles/QrStyles.module.css';
import { ThemeContext } from '../../context/ThemeContext';

const WifiQR = () => {
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
    <div className={styles.container} style={{ background: colors.gradient }}>
      <Link to="/" className={styles.backButton}>← Volver al menú</Link>
      
      <div className={styles.formContainer}>
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

        {wifiData.ssid && (
          <div className={styles.qrPreview}>
            <QRCodeSVG
              value={generateWifiString()}
              size={256}
              fgColor={colors.accent}
              bgColor="transparent"
            />
            <p className={styles.qrCaption}>Escanea para conectar al WiFi</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WifiQR;