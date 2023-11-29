import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <h1>Cursos Online</h1>

            <ul>
                <li>
                    <a href="#"><i class="fa-brands fa-instagram"></i> - cursosonline</a>
                </li>
                <li>
                    <a href="#"><i class="fa-brands fa-facebook"></i> - Cursos Online</a>
                </li>
                <li>
                    <a href="#"><i class="fa-brands fa-whatsapp"></i> - (00) 00000-0000</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer