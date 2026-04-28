# WayCare 💚

> Jornada Gamificada do Cuidado Contínuo — Challenge Care Plus | FIAP

## 📋 Sobre o Projeto

O **WayCare** é um aplicativo de saúde gamificada desenvolvido em parceria com a Care Plus para o Challenge da FIAP. A plataforma transforma hábitos saudáveis em uma jornada personalizada e recompensadora, onde o usuário completa missões diárias, ganha Health Coins e desbloqueia recompensas reais.

### Funcionalidades principais
- Trilhas de bem-estar personalizadas (Sono, Movimento, Mindfulness, Nutrição, Check-up)
- Sistema de missões diárias com gamificação
- Health Coins — moeda interna trocável por recompensas
- Conquistas e badges desbloqueáveis
- Descobertas personalizadas baseadas nos dados da WayCare Band
- WayCare Bottle — suporte de garrafa inteligente com monitoramento IoT de hidratação
- Onboarding com aceite de termos LGPD

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| HTML5 | — | Estrutura semântica |
| CSS3 | — | Estilização e design system |
| Bootstrap | 5.3.3 | Layout responsivo e componentes |
| Font Awesome | 6.5.0 | Ícones |
| JavaScript | Vanilla | Interatividade (login, cadastro, onboarding) |
| Google Fonts | — | Tipografia (Roboto) |

---

## 📁 Estrutura de Pastas

```
waycare-frontend/
├── index.html                  # Onboarding (3 telas)
├── README.md
├── INTEGRANTES.TXT
│
├── assets/
│   └── images/
│       └── LogoWayCare.png     # Logo do projeto
│
├── css/
│   ├── global.css              # Design system e componentes globais
│   ├── auth.css                # Login e cadastro
│   ├── onboarding.css          # Telas de onboarding
│   ├── dashboard.css           # Página inicial
│   ├── trilhas.css             # Trilhas de bem-estar
│   ├── conquistas.css          # Conquistas
│   ├── descobertas.css         # Descobertas personalizadas
│   ├── recompensas.css         # Catálogo de recompensas
│   ├── perfil.css              # Perfil do usuário
│   ├── configuracoes.css       # Configurações
│   └── waycare-bottle.css      # Página da garrafa IoT
│
├── js/
│   ├── login.js                # Toggle de senha + redirect
│   ├── cadastro.js             # Multi-step + validações
│   └── onboarding.js           # Navegação entre telas + checkboxes
│
└── pages/
    ├── login.html
    ├── cadastro.html
    ├── dashboard.html
    ├── trilhas.html
    ├── conquistas.html
    ├── descobertas.html
    ├── recompensas.html
    ├── perfil.html
    ├── configuracoes.html
    └── waycare-bottle.html
```

---

## 🔄 Fluxo de Navegação

```
login.html ──────────────────────────→ dashboard.html
cadastro.html → index.html (onboarding) → dashboard.html
```

---

## ▶️ Como Executar

1. Clone ou baixe o repositório
2. Abra o arquivo `pages/login.html` no navegador
3. Ou utilize a extensão **Live Server** no VS Code para melhor experiência

> Não é necessária nenhuma instalação ou dependência — o projeto roda diretamente no navegador.

---

## 📱 Responsividade

O projeto é totalmente responsivo, adaptado para:
- **Desktop** (base de desenvolvimento)
- **Tablet** (breakpoint 1024px)
- **Mobile** (breakpoint 768px e 480px)

Em mobile, a sidebar é ocultada e acessada por um botão hamburguer fixo no canto superior direito.

---

## 🎨 Design System

O arquivo `css/global.css` centraliza todas as variáveis do projeto:

- **Cor primária:** `#1c9770` (verde esmeralda)
- **Health Coins:** `#f5a623` (dourado)
- **Tipografia:** Roboto (400, 500, 700)
- **Espaçamento:** escala de 4px a 64px
- **Border radius:** sm (6px), md (12px), lg (16px), xl (24px)

---

## 👥 Integrantes

| Nome | RM |
|---|---|
| João Victor Melo Santos | 566640 |
| Gustavo Atsuyuki Hiruo | 567625 |
| Gustavo Macedo Daniel | 567594 |
| Yan Lucas Gonçalves da Silva | 567046 |

---

## 🏫 Informações Acadêmicas

- **Instituição:** FIAP
- **Curso:** Engenharia de Software — 1º ano
- **Challenge:** Care Plus — Jornada Gamificada do Cuidado Contínuo
- **Sprint:** 2 (entrega Front-End)