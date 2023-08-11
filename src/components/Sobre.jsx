import '../assets/css/sobre-style.css';
import Title from './Title';
import iconLinkedin from '../assets/img/sobre-linkedin.png'
import iconGithub from '../assets/img/sobre-github.png'
import iconCurriculo from '../assets/img/sobre-currículo.png'

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
                        Me chamo Paulo Henrique e neste momento resido na cidade de São Paulo. No ano de 2019, me formei em Análise e Design de Sistemas. Durante o último ano da minha formação acadêmica, iniciei minha trajetória no setor administrativo, onde permaneci por um período de três anos e meio.<br></br>
                        No entanto, percebi que estava me afastando da minha verdadeira aspiração, que sempre consistiu em ser um profissional na área de desenvolvimento. Por esse motivo, optei por deixar essa esfera de atuação e, no ano de 2023, retomei meus estudos com foco em diversas tecnologias relacionadas ao Front-End, como React, HTML, CSS, JavaScript, Tailwind e Node.js. Além disso, possuo competência em Python e variados sistemas de gerenciamento de bancos de dados.<br></br>
                        Neste momento, estou trabalhando como Freelancer, dedicando-me ao desenvolvimento de uma ampla gama de interfaces, sempre em busca de qualidade em todas as minhas realizações.<br></br>
                        É possível me encontrar no GitHub, onde me dedico a elaborar projetos de cunho pessoal utilizando a tecnologia React, ou no LinkedIn, onde frequentemente participo de discussões relacionadas ao desenvolvimento Front-End.
                        </p>
                        <div className='sobre-box-icon'>
                            <a href="#"><img src={iconLinkedin} alt="icon01" /></a>
                            <a href="#"><img src={iconGithub} alt="icon02" /></a>
                            <a href="#"><img src={iconCurriculo} alt="icon03" /></a>
                        </div>
                    </div>
                </div>
                <div className='sobre-subbox02'> 
                    <img src="#" alt="img-my" />
                </div>
            </div>
        </section>
    )
}

export default Sobre;