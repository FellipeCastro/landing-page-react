import styles from './Contato.module.css';

function Contato() {

    const formSubmit = (e) => {
        e.preventDefault()
    } 

    return (
        <section className={styles.contato_container}>
            <div className={styles.titulo_container}>
                <span>Precisa de ajuda?</span>
                <h2>Entre em contato conosco</h2>
            </div>
            <form onSubmit={formSubmit} className={styles.form} autoComplete='off'>
                <div className={styles.input_container}>
                    <label htmlFor='nome'>Nome: </label>
                    <input type="text" name="nome" id="nome" placeholder='Digite seu nome aqui' />
                </div>

                <div className={styles.input_container}>
                    <label htmlFor='email'>E-mail: </label>
                    <input type="text" name="email" id="email" placeholder='Digite seu e-mail aqui' />
                </div>

                <div className={styles.input_container}>
                    <label htmlFor='mensagem'>Mensagem: </label>
                    <textarea name="mensagem" id="mensagem" cols="30" rows="10" placeholder='Digite sua mensagem aqui'></textarea>
                </div>

                <div className={styles.button_container}>
                    <button type="submit">
                        <i class="fa-solid fa-paper-plane"></i> Enviar
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Contato