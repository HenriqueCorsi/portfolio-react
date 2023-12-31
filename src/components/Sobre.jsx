import '../assets/css/sobre-style.css';
import Title from './Title';
import iconLinkedin from '../assets/img/sobre-linkedin.png'
import iconGithub from '../assets/img/sobre-github.png'
import iconCurriculo from '../assets/img/sobre-currículo.png'
import myImg from '../assets/img/my-img.jpeg'

function Sobre (){
    return(
        <section className='sobre-container'>
            <Title title="Sobre Mim"/>
            <div className='sobre-box'>
                <div className='sobre-subbox01'>
                    <h3>Escrito Por</h3>
                    <h2>Paulo Henrique</h2>
                    <div className='sobre-desc'>
                        <p>
                        Me chamo Paulo Henrique e neste momento resido na cidade de São Paulo. No ano de 2019, me formei em Análise e Desenvolvimento de Sistemas. Durante o último ano da minha formação acadêmica, iniciei minha trajetória no setor administrativo, onde permaneci por um período de três anos e meio.<br></br>
                        No entanto, percebi que estava me afastando da minha verdadeira aspiração, que sempre consistiu em ser um profissional na área de desenvolvimento. Por esse motivo, optei por deixar essa esfera de atuação e, no ano de 2022, retomei meus estudos com foco em diversas tecnologias relacionadas ao Front-End, como <strong>React, HTML, CSS, JavaScript, e Node.js.</strong> Além disso, possuo competência em <strong>Python</strong> e variados sistemas de <strong>Gerenciamento de Bancos de Dados</strong>.<br></br>
                        Neste momento, estou trabalhando como Freelancer, dedicando-me ao desenvolvimento de uma ampla gama de interfaces, sempre em busca de qualidade em todas as minhas realizações.<br></br>
                        É possível me encontrar no <strong>GitHub</strong>, onde me dedico a elaborar projetos de cunho pessoal, ou no <strong>LinkedIn</strong>, onde frequentemente participo de discussões relacionadas ao desenvolvimento Front-End.
                        </p>
                        <div className='sobre-box-icon'>
                            <a href="https://www.linkedin.com/in/paulohenrique--/" target='_blank'><img src={iconLinkedin} alt="icon01" /></a>
                            <a href="https://github.com/HenriqueCorsi" target='_blank'><img src={iconGithub} alt="icon02" /></a>
                            <a href="#"><img src={iconCurriculo} alt="icon03" /></a>
                        </div>
                    </div>
                </div>
                <div className='sobre-subbox02'> 
                    <img src={myImg} alt="img-my" />
                </div>
            </div>
        </section>
    )
}

export default Sobre;