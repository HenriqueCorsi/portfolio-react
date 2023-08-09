import '../assets/css/projetos-style.css';
import iconTablet01 from '../assets/img/table-projeto01.png';
import iconTablet02 from '../assets/img/table-projeto02.png';
import iconMobile01 from '../assets/img/mobile-projeto01.png';
import iconMobile02 from '../assets/img/mobile-projeto02.png';

function Projetos(){
    return(
        <section className='projetos-container'>
            <div className='projetos-box'>
                <a href="#" target='_blank'><img className='img-tablet' src={iconTablet01} alt="icon tablet" /></a>
                <div className='mobile-box'>
                    <a href="#" target='_blank'><img className='img-mobile01' src={iconMobile01} alt="icon mobile" /></a>
                </div>
                <div className='box-links'>
                    <a href="#" target='_blank'>Site</a>
                    <a href="#" target='_blank'>Repositório</a>
                </div>
            </div>
            <div className='projetos-box'>
                <a href="#" target='_blank'><img className='img-tablet' src={iconTablet02} alt="icon tablet" /></a>
                <div className='mobile-box'>
                    <a href="#" target='_blank'><img className='img-mobile02' src={iconMobile02} alt="icon mobile" /></a>
                </div>
                <div className='box-links'>
                    <a href="#" target='_blank'>Site</a>
                    <a href="#" target='_blank'>Repositório</a>
                </div>
            </div>
        </section>
    )
}

export default Projetos;