import styles from './Header.module.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <h1>Cursos Online</h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/cursos">Cursos</Link>
                <Link to="/contato">Contato</Link>
            </nav>
        </header>
    )
}

export default Header