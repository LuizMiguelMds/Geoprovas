# Geoprovas
Aplicativo de geração de provas de Geografia com IA

📌 Visão Geral
O Geoprovas é um projeto acadêmico que utiliza Inteligência Artificial e Machine Learning para auxiliar professores na criação de provas personalizadas de Geografia, com:
✔ Geração automática de questões por tópico e nível de dificuldade.
✔ Pré-visualização e download em PDF/TXT.
✔ Dashboard de desempenho dos alunos.
✔ Integração com mapas interativos e recursos gamificados.

🚀 Tecnologias
Área	Tecnologias	Finalidade
Front-end	React.js, Tailwind CSS, Leaflet.js (mapas), Chart.js (gráficos)	Interface do professor e visualização de dados.
Back-end	FastAPI (Python), PostgreSQL/SQLite	API para gerar questões e armazenar dados.
IA/ML	Python, Hugging Face (BERTimbau), Scikit-learn	Classificação e geração de questões.
Ferramentas	Git/GitHub, Trello (gestão), Google Colab (IA), VSCode	Desenvolvimento colaborativo.

🛠 Como Configurar o Projeto
Pré-requisitos
Python 3.10+
Node.js 16+
Git
PostgreSQL (opcional para produção)

Passo a Passo
Clone o repositório:

bash
Copy
git clone https://github.com/seu-usuario/Geoprovas.git  
cd Geoprovas  
Back-end (FastAPI):

bash
Copy
cd backend  
python -m venv venv  
source venv/bin/activate  # Linux/Mac | venv\Scripts\activate (Windows)  
pip install -r requirements.txt  # Instala dependências  
uvicorn main:app --reload       # Inicia o servidor  
Front-end (React):

bash
Copy
cd ../frontend  
npm install  
npm start  
IA/ML (Jupyter Notebook):

Abra os notebooks em ia/ para treinar modelos.

📂 Estrutura do Projeto
Geoprovas/  
├── backend/           # API FastAPI  
├── frontend/          # Aplicação React  
├── ia/                # Scripts de IA/ML  
├── datasets/          # Questões em CSV/JSON  
├── docs/              # Documentação  
└── README.md