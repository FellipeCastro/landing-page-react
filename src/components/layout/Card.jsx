import styles from './Card.module.css';

function Card({nome, img}) {
    return (
        <div className={styles.card}>
            <img src={img} alt="nome" />
            <h3>{nome}</h3>
        </div>
    )
}

export default Card