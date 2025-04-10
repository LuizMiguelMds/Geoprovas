import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  // States para o gerador de questões
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('medio');
  const [generatedQuestion, setGeneratedQuestion] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Função para chamar a API do FastAPI
  const handleGenerateQuestion = async () => {
    if (!selectedTopic) {
      alert("Selecione um tópico!");
      return;
    }
  
    console.log("[1] Iniciando geração...");  // Debug 1
    setIsGenerating(true);
  
    try {
      const url = `http://localhost:8000/gerar-questao?tema=${selectedTopic}`;
      console.log("[2] URL:", url);  // Debug 2
  
      const response = await fetch(url);
      console.log("[3] Status:", response.status);  // Debug 3
  
      const data = await response.json();
      console.log("[4] Dados recebidos:", data);  // Debug 4
  
      setGeneratedQuestion(data);
      console.log("[5] Estado atualizado");  // Debug 5
  
    } catch (error) {
      console.error("[ERRO] Detalhes:", error);  // Debug erro
      alert("Erro ao gerar questão. Verifique o console.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} alt="Geoprovas Logo" className="logo" />
          <h1>Geoprovas</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <button 
                className={activeTab === 'home' ? 'active' : ''} 
                onClick={() => {
                  setActiveTab('home');
                  setGeneratedQuestion(null);
                }}
              >
                Início
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'generator' ? 'active' : ''} 
                onClick={() => setActiveTab('generator')}
              >
                Gerador de Provas
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'dashboard' ? 'active' : ''} 
                onClick={() => setActiveTab('dashboard')}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'maps' ? 'active' : ''} 
                onClick={() => setActiveTab('maps')}
              >
                Mapas Interativos
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {activeTab === 'home' && (
          <div className="home-container">
            <div className="hero-section">
              <h2>Inteligência artificial a serviço da educação geográfica</h2>
              <p>Crie provas personalizadas de Geografia com apenas alguns cliques</p>
              <button 
                className="cta-button" 
                onClick={() => {
                  setActiveTab('generator');
                  setGeneratedQuestion(null);
                }}
              >
                Começar agora
              </button>
            </div>
            
            <div className="features-section">
              <h3>Recursos</h3>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">📝</div>
                  <h4>Geração Automática</h4>
                  <p>Crie questões personalizadas por tópico e nível de dificuldade</p>
                </div>
                
                <div className="feature-card">
                  <div className="feature-icon">📊</div>
                  <h4>Dashboard de Desempenho</h4>
                  <p>Acompanhe o progresso dos seus alunos</p>
                </div>
                
                <div className="feature-card">
                  <div className="feature-icon">🗺️</div>
                  <h4>Mapas Interativos</h4>
                  <p>Recursos visuais para enriquecer o aprendizado</p>
                </div>
                
                <div className="feature-card">
                  <div className="feature-icon">🎮</div>
                  <h4>Gamificação</h4>
                  <p>Torne o aprendizado mais engajador</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'generator' && (
          <div className="generator-container">
            <h2>Gerador de Provas</h2>
            <p>Configure e gere suas provas de Geografia</p>
            <div className="generator-form">
              <div className="form-group">
                <label>Tópico:</label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                >
                  <option value="">Selecione um tópico</option>
                  <option value="climatologia">Climatologia</option>
                  <option value="geopolitica">Geopolítica</option>
                  <option value="hidrografia">Hidrografia</option>
                  <option value="biomas">Biomas Brasileiros</option>
                  <option value="urbanizacao">Urbanização</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Nível de dificuldade:</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  <option value="basico">Ensino Básico</option>
                  <option value="fundamental">Ensino Fundamental</option>
                  <option value="medio">Ensino Médio/Vestibular</option>
                </select>
              </div>
              
              <button 
                className="primary-button"
                onClick={handleGenerateQuestion}
                disabled={isGenerating}
              >
                {isGenerating ? 'Gerando...' : 'Gerar Questão'}
              </button>

              {generatedQuestion && (
                <div className="question-result">
                  <h3>Questão Gerada:</h3>
                  <p><strong>Tema:</strong> {generatedQuestion.tema}</p>
                  <p><strong>Dificuldade:</strong> {generatedQuestion.dificuldade}</p>
                  <p><strong>Enunciado:</strong> {generatedQuestion.questao}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="dashboard-container">
            <h2>Dashboard de Desempenho</h2>
            <p>Acompanhe o progresso dos seus alunos aqui</p>
            <div className="dashboard-placeholder">
              <p>Em desenvolvimento - em breve gráficos e estatísticas</p>
            </div>
          </div>
        )}

        {activeTab === 'maps' && (
          <div className="maps-container">
            <h2>Mapas Interativos</h2>
            <p>Explore recursos geográficos interativos</p>
            <div className="maps-placeholder">
              <p>Em desenvolvimento - em breve mapas interativos</p>
            </div>
          </div>
        )}
      </main>

      <footer>
        <p>&copy; 2025 Geoprovas - Projeto Acadêmico</p>
      </footer>
    </div>
  );
}

export default App;