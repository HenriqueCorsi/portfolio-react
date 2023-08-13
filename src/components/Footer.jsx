import '../assets/css/footer-style.css'
import iconEmail from '../assets/img/email-icon.png'

function Footer(){
    return(
        <footer>
           <div className='footer-icon'>
                <img src={iconEmail} alt="icon email" />
           </div>
           <p>henrique.corsi11@gmail.com</p>
           <button>Copiar Email</button>
        </footer>
    )
}

export default Footer;