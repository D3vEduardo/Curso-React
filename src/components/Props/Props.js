import styles from './Props.modules.css';
import PropTypes from 'prop-types';
import MostrarCode from '../MostrarCode/MostrarCode.js'

let code = 'https://cdn.discordapp.com/attachments/1196236630089023529/1234842862525616188/1714479832117.png?ex=66323488&is=6630e308&hm=36c254ae53047a9db239ff613f32b847517df6cc3013292197220446dcc3d2c2&';

function Props({ nome, vel, cor, urlImage}) {
  return (
    <div class="aula">
      <h1 className="title">Hiper carro</h1>
      <h2 className={styles.detalhes}>Nome: {nome}</h2>
      <h2 className={styles.detalhes}>Velocidade: {vel} Km/h</h2>
      <h2 className={styles.detalhes}>Cor: {cor}</h2>
      <img src={urlImage} alt={nome} className={styles.picture} />
      <MostrarCode code={code} src="./src/Components/Props/Props.js" />
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