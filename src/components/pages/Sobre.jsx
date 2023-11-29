import styles from './Sobre.module.css';

import img from '../../img/Artificial intelligence-amico.svg';

function Sobre() {
    return (
        <section className={styles.sobre_container}> 
            <div className={styles.text_container}>
                <h2>Sobre nós</h2>
                <p>
                    Embarque em uma jornada com cursos adaptados a todos os níveis de habilidade, desde iniciantes até especialistas, oferecemos a flexibilidade de aprender no seu próprio ritmo. Nossos instrutores especializados proporcionam uma experiência prática, capacitando você com habilidades em diversas linguagens. Acessível de qualquer lugar, a qualquer momento, nossa plataforma não apenas ensina, mas também constrói uma comunidade de aprendizado colaborativo. Comece a programar sua jornada agora!
                </p>
            </div>
            <div className={styles.img_container}>
                <img src={img} alt="Cursos Online" />
            </div>
        </section>
    )
}

export default Sobre