import React from 'react';

import MostrarCode from '../MostrarCode/MostrarCode';

function AcessPerms() {
  
  let nomes = ['Eduardo', 'Eduardo Augusto', 'Oduh', 'Oduh Js', 'Matheus Battisti', 'Matheus', 'Meireles', 'Rogério'];
  let randomIndex = Math.floor(Math.random() * nomes.length);
  
  let code = 'https://cdn.discordapp.com/attachments/1196236630089023529/1234835935158603786/code.png?ex=66322e15&is=6630dc95&hm=3d1598026074edd2a3f8ffb3bd7565bbc2f11604b11c4a57b2cbea2c6514daed&';
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
      <MostrarCode code={code} src="./src/Components/AcessPerms/AcessPerms.js" />
    </div>
    )
}

export default AcessPerms