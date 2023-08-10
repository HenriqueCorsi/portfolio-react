import '../assets/css/sobre-style.css';
import Title from './Title';

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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur iure nulla officiis enim sunt numquam fugiat accusamus, nihil voluptas optio qui cupiditate in quas recusandae, mollitia excepturi ad porro.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure ea voluptates quam, laboriosam dolorum quos natus placeat, vitae quia mollitia quas quibusdam expedita officia fugiat culpa dicta saepe totam?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque ipsa hic dignissimos ad assumenda obcaecati quibusdam sit consectetur, voluptatibus laborum, dolor vitae cum maiores officia modi aliquid magni! Nostrum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem porro aut, aperiam inventore, fuga natus magnam id incidunt totam laboriosam. Eveniet cum provident alias rerum, aspernatur officia temporibus. Animi?
                        </p>
                    </div>
                </div>
                <div className='sobre-subbox02'> 
                    ola mundo
                </div>
            </div>
        </section>
    )
}

export default Sobre;