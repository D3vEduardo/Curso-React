import React from 'react';

function AcessPerms() {
  
  let nomes = ['Eduardo', 'Eduardo Augusto', 'Oduh', 'Oduh Js', 'Matheus Battisti', 'Matheus', 'Meireles', 'Rogério'];
  let randomIndex = Math.floor(Math.random() * nomes.length);
  
  let nome = nomes[randomIndex];
  
  const listnames = ['Eduardo Augusto', 'Eduardo', 'Oduh', 'Oduh Js'];
  let acess;
  if ( listnames.includes(nome) ) {
    acess = [`Acesso permitido! Seja bem-vindo, ${nome}.`, true];
  } else {
    acess = [`Acesso negado! Tenha um bom dia, ${nome}.`, false];
  }
  
  return (
    <div className="aula">
      <h1 className="title">Curso React</h1>
      <h2>{ acess[0] }</h2>
    </div>
    )
}

export default AcessPerms