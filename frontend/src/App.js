import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png'; // Você precisará criar este logo

function App() {
  const [activeTab, setActiveTab] = useState('home');
  
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
                onClick={() => setActiveTab('home')}
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
              <button className="cta-button" onClick={() => setActiveTab('generator')}>
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
                <select>
                  <option value="">Selecione um tópico</option>
                  <option value="climatologia">Climatologia</option>
                  <option value="geopolitica">Geopolítica</option>
                  <option value="hidrografia">Hidrografia</option>
                  <option value="biomas">Biomas</option>
                  <option value="urbanizacao">Urbanização</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Nível de dificuldade:</label>
                <select>
                  <option value="">Selecione um nível</option>
                  <option value="facil">Fácil</option>
                  <option value="medio">Médio</option>
                  <option value="dificil">Difícil</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Quantidade de questões:</label>
                <input type="number" min="1" max="20" defaultValue="10" />
              </div>
              
              <button className="primary-button">Gerar Prova</button>
            </div>
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="dashboard-container">
            <h2>Dashboard de Desempenho</h2>
            <p>Acompanhe o progresso dos seus alunos aqui</p>
            <div className="dashboard-placeholder">
              <p>Aqui serão exibidos os gráficos e estatísticas de desempenho</p>
            </div>
          </div>
        )}

        {activeTab === 'maps' && (
          <div className="maps-container">
            <h2>Mapas Interativos</h2>
            <p>Explore recursos geográficos interativos</p>
            <div className="maps-placeholder">
              <p>Aqui serão carregados os mapas interativos</p>
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