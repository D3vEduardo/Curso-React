function Props({ nome, vel, cor}) {
  return (
    <div class="aula">
      <h1 className="title">Hiper carro</h1>
      <h2>Nome: {nome}</h2>
      <h2>Velocidade: {vel}</h2>
      <h2>Cor: {cor}</h2>
    </div>
    )
}

export default Props