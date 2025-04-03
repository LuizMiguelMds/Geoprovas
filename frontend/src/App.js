import React, { useState } from 'react';

function App() {
  const [tema, setTema] = useState('');
  const [questao, setQuestao] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/gerar-questao?tema=${tema}`);
    const data = await response.json();
    setQuestao(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tema}
          onChange={(e) => setTema(e.target.value)}
          placeholder="Digite um tema (ex: geopolítica)"
        />
        <button type="submit">Gerar Questão</button>
      </form>
      {questao && (
        <div>
          <h3>{questao.questao}</h3>
          <p>Tema: {questao.tema} | Dificuldade: {questao.dificuldade}</p>
        </div>
      )}
    </div>
  );
}
export default App;
