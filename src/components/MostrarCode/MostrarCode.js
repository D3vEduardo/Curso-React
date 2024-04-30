import styles from './MostrarCode.module.css';
import { useState } from 'react';

function MostrarCode({ src, code }) {

  const [showCode, setShowCode] = useState(false);

  function hide() {
    setShowCode(false);
  }
  
  function show() {
    setShowCode(true);
  }
  
  if (!showCode) {
    return (
    <div>
      <button onClick={show} className={styles.button_30}>Mostrar Código</button>
    </div>
  )
  } else {
    return (
      <div>
      <button onClick={hide} className={styles.button_30}>Esconder Código</button>
      <div>
      <p className={styles.src}>{src}</p>
      <img src={code} className={styles.code} alt={src} />
      </div>
      </div>
      )
  }
}

export default MostrarCode