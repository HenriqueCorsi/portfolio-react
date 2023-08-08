import '../assets/css/header-style.css';
import iconLinkedin from '../assets/img/linkedin-icon.png';
import iconGitHub from '../assets/img/github-icon.png';
import iconCurriculo from '../assets/img/currículo-icon.png';

function Header(){
    return(
        <header>
           <div className='header-container'>
                <h2>Olá,👋 me chamo <strong>Paulo Henrique</strong></h2>
                <div className='header-box01'>
                    <h1>react</h1>
                    <div className='icon-box'>
                        <a href="#"><img src={iconLinkedin} alt="icone Linkedin" /></a>
                        <a href="#"><img src={iconGitHub} alt="icone Gihub" /></a>
                        <a href="#"><img src={iconCurriculo} alt="icon Curriulo" /></a>
                    </div>
                </div>
                <div className='header-box02'>
                    <h1>developer</h1>
                </div>
                <div className='header-box03'>
                    <div className='header-desc'>
                        <p>Tenho 25 anos, sou desenvolvedor FRONT-END com 8 meses de experiência trabalhando como freelancer e em projetos pessoais. Gosto de resolver problemas e otimizar tarefas utilizando tecnologia.</p>
                    </div>
                </div>
           </div>
        </header>
    )
}

export default Header