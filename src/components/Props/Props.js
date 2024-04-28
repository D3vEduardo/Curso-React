import styles from './Props.modules.css';
import PropTypes from 'prop-types';

function Props({ nome, vel, cor, urlImage}) {
  return (
    <div class="aula">
      <h1 className="title">Hiper carro</h1>
      <h2 className={styles.detalhes}>Nome: {nome}</h2>
      <h2 className={styles.detalhes}>Velocidade: {vel} Km/h</h2>
      <h2 className={styles.detalhes}>Cor: {cor}</h2>
      <img src={urlImage} alt={nome} className={styles.picture} />
    </div>
    )
}

Props.propTypes = {
  nome: PropTypes.string.isRequired,
  vel: PropTypes.number.isRequired,
  cor: PropTypes.string.isRequired,
}

Props.defaultProps = {
  urlImage: 'https://media.discordapp.net/attachments/1196236630089023529/1234242518367993896/OIP_6.jpg?ex=6630056b&is=662eb3eb&hm=496188c73f18625f90184279903ab373c156267bbd7f65530348bab238db0a1d&',
}

export default Props