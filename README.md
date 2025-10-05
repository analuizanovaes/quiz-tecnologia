# 🎯 Quiz de Tecnologia em Equipe

Um quiz interativo e educativo sobre hardware e programação, desenvolvido para ser jogado em equipe com interface responsiva e temporizador.

## 📋 Descrição

Este projeto é um quiz de tecnologia que testa conhecimentos sobre componentes de computador e linguagens de programação. Desenvolvido para promover aprendizado colaborativo, o quiz sorteia 8 perguntas aleatórias de um banco de 30 questões a cada nova partida.

## ✨ Funcionalidades Principais

- **🎲 Perguntas Aleatórias**: 8 questões sorteadas de um banco com 30 perguntas
- **⏱️ Temporizador**: 30 segundos por pergunta com alerta visual nos últimos 10 segundos
- **👥 Modo em Equipe**: Design pensado para discussão em grupo
- **📊 Sistema de Pontuação**: Acompanhamento em tempo real de acertos e erros
- **🏆 Sistema de Recompensa**: Prêmio para equipes com 5+ acertos
- **📱 Design Responsivo**: Adaptado para desktop e mobile
- **🎨 Interface Atraente**: Design moderno com gradientes e feedback visual

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: 
  - Flexbox para layout
  - Gradientes e animações
  - Design responsivo com media queries
- **JavaScript (ES6+)**:
  - Manipulação do DOM
  - Lógica do quiz e temporizador
  - Sistema de embaralhamento de perguntas

## 🎮 Como Jogar

1. **Iniciar**: Clique em "Iniciar Desafio"
2. **Discutir**: A equipe conversa para chegar à resposta
3. **Responder**: Selecione uma das opções antes do tempo acabar
4. **Avançar**: Continue para a próxima pergunta
5. **Resultado**: Veja se a equipe ganhou o prêmio (5+ acertos)

## 📁 Estrutura do Projeto

```
quiz-tecnologia/
├── index.html          # Estrutura principal
├── style.css           # Estilos e design responsivo
├── script.js           # Lógica do quiz e interatividade
└── Online tech talks-amico.png  # Ilustração
```

## 🎯 Características Técnicas

### Banco de Perguntas
- **30 questões** divididas em:
  - 20 sobre Hardware
  - 10 sobre Linguagens de Programação
- **Sistema de embaralhamento** garantindo desafios únicos
- **Feedback educativo** com explicações detalhadas

### Sistema de Tempo
- ⏰ 30 segundos por pergunta
- 🔴 Alerta visual nos últimos 10 segundos
- ⚡ Animação de pulsação no temporizador

### Design Responsivo
- 🖥️ Layout desktop com dois painéis
- 📱 Versão mobile otimizada
- 🎨 Cores acessíveis e contraste adequado

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone [url-do-repositorio]
   ```

2. **Abra o projeto**:
   - Navegue até a pasta do projeto
   - Abra o arquivo `index.html` em um navegador

3. **Ou execute com servidor local**:
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js
   npx http-server
   ```

## 📝 Personalização

### Adicionar Novas Perguntas
Edite o array `perguntas` no arquivo `script.js`:

```javascript
{
  pergunta: "Sua pergunta aqui?",
  respostas: [
    { texto: "Resposta errada", correta: false, explicacao: "Explicação do erro" },
    { texto: "Resposta correta", correta: true, explicacao: "Explicação do acerto" },
    { texto: "Outra resposta errada", correta: false, explicacao: "Explicação do erro" }
  ]
}
```

### Customizar Aparência
Modifique as variáveis CSS no arquivo `style.css`:

```css
:root {
  --cor-primaria: #7C3AED;
  --cor-secundaria: #EC4899;
  --tempo-por-pergunta: 30;
}
```

## 🎨 Características de UX/UI

- **Feedback Visual Imediato**: Cores para respostas certas/erradas
- **Progresso Visível**: Contador de perguntas (1/8, 2/8...)
- **Placar em Tempo Real**: Acompanhamento contínuo do desempenho
- **Transições Suaves**: Animações CSS para melhor experiência
- **Textos Claros**: Linguagem acessível e explicativa

## 📊 Lógica de Negócio

- ✅ **Vitória**: 5+ acertos em 8 perguntas
- 🔄 **Reinício**: Novo sorteio de perguntas
- ⏭️ **Progressão Linear**: Uma pergunta por vez
- 🎲 **Aleatoriedade**: Embaralhamento Fisher-Yates

## 🌟 Próximas Melhorias

- [ ] Sistema de ranking entre equipes
- [ ] Modos de dificuldade (Iniciante/Avançado)
- [ ] Timer configurável
- [ ] Efeitos sonoros
- [ ] Modo competição (múltiplas equipes)
- [ ] Dashboard de estatísticas

## 👥 Público-Alvo

- **Estudantes** de tecnologia
- **Equipes** de treinamento corporativo
- **Professores** em aulas interativas
- **Grupos** de estudo e workshops

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🙏 Créditos

- Ilustrações por [Storyset](https://storyset.com/people)
- Desenvolvido com 💜 para o aprendizado coletivo
