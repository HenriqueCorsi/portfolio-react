import React, { useState } from 'react';
import '../assets/css/footer-style.css';
import iconEmail from '../assets/img/email-icon.png';

function Footer() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const emailElement = document.createElement('input');
    emailElement.value = 'henrique.corsi11@gmail.com';
    document.body.appendChild(emailElement);
    emailElement.select();
    document.execCommand('copy');
    document.body.removeChild(emailElement);
    setIsCopied(true);

    // Remove o efeito de clique após um tempo para restaurar o botão ao estado normal
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <footer>
      <div className='footer-icon'>
        <img src={iconEmail} alt="icon email" />
      </div>
      <h4>Entre em Contato</h4>
      <p>henrique.corsi11@gmail.com</p>
      <button
        onClick={handleCopyClick}
        className={isCopied ? 'copied' : ''}
      >
        {isCopied ? 'Email Copiado!' : 'Copiar Email'}
      </button>
    </footer>
  );
}

export default Footer;
