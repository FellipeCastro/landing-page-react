import {Link} from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
    return (
        <section className={styles.home_container}>
            <div className={styles.text_container}>
                <h2>Cursos de programação, do <span>zero ao profissional</span>, para iniciar ou evoluir a sua carreira como programador!</h2>
                <Link to="/cursos">Conheça nossos cursos</Link>
            </div>
            <div className={styles.img_container}>
                <img src="../img/Innovation-amico.svg" alt="Cursos Online"/>
            </div>
        </section>
    )
}

export default Home