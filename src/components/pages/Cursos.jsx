import Card from '../layout/Card';
import styles from './Cursos.module.css';

function Cursos() {
    const cursos = [
        {
            nome: "HTML",
            img: 'src/img/html-5.jpg'
        },
        {
            nome: "CSS",
            img: 'src/img/css-3.jpg'
        },
        {
            nome: "Javascript",
            img: 'src/img/javascript.jpg'
        },
        {
            nome: "React JS",
            img: 'src/img/reactjs.jpg'
        },
        {
            nome: "Typescript",
            img: 'src/img/typescript.jpg'
        },
        {
            nome: "Python",
            img: 'src/img/python.jpg'
        },
        {
            nome: "PHP",
            img: 'src/img/php.jpg'
        },
        {
            nome: "Node JS",
            img: 'src/img/nodejs.jpg'
        },
        {
            nome: "MySQL",
            img: 'src/img/mysql.jpg'
        }
    ]
    
    return (
        <section className={styles.cursos_container}>
            <h2>Cursos</h2>

            <div className={styles.cards_container}>
                {cursos.map(curso => {
                    return <Card
                        key={curso.nome}
                        nome={curso.nome}
                        img={curso.img}
                    />
                })}
            </div>
        </section>
    )
}

export default Cursos