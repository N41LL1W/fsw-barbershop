# Projeto Barbershop Finder

Este projeto tem como objetivo criar uma aplicação para facilitar a busca por barbearias, permitindo que os usuários encontrem e filtrem barbearias com base no nome e nos serviços oferecidos, além de oferecer funcionalidades de autenticação e uma interface de usuário aprimorada.

## Passo a Passo de Desenvolvimento

### 1. Configuração Inicial do Projeto
- **Configuração do Prisma**: Inicialmente, foi configurado o Prisma como ORM para gerenciar as interações com o banco de dados. Isso permite que as operações com o banco sejam feitas de forma eficiente e segura.
- **Criação do Script de Seed**: Um script de seed foi adicionado para popular o banco de dados com dados iniciais, facilitando o desenvolvimento e os testes.

### 2. Estilização e Temas
- **Adição do Tema Shadcn**: Para melhorar a consistência visual da aplicação, foi adicionado o tema Shadcn. Isso garante que a interface seja atraente e profissional.
- **Configuração do Prettier com Tailwind**: Um plugin do Prettier para Tailwind foi introduzido, assegurando que o código CSS seja formatado corretamente, o que facilita a manutenção do código.

### 3. Implementação da Autenticação
- **Configuração do NextAuth**: O NextAuth foi configurado para gerenciar a autenticação, permitindo integração com provedores de identidade como Google.
- **Adição do AuthProvider**: O `AuthProvider` foi implementado para gerenciar o estado de autenticação na aplicação.
- **Integração com Google**: A funcionalidade de login com o Google foi adicionada, simplificando o processo de autenticação para os usuários.

### 4. Estruturação da Interface do Usuário
- **Adição do Header e Banner**: O componente `Header` e um banner foram adicionados para melhorar a apresentação visual da aplicação.
- **Implementação da Sidebar**: Uma barra lateral foi criada para facilitar a navegação entre as diferentes seções da aplicação.
- **Adição do Footer e PhoneItems**: O rodapé e os componentes `PhoneItems` foram integrados ao layout, aprimorando a organização e a navegabilidade.

### 5. Desenvolvimento das Funcionalidades Principais
- **Criação da Página de Barbearias**: Foi implementada uma página para exibir as barbearias disponíveis, onde os usuários podem ver detalhes e serviços oferecidos.
- **Implementação da Pesquisa Rápida**: A funcionalidade de pesquisa rápida foi adicionada, permitindo aos usuários encontrar barbearias de maneira mais eficiente.
- **Exibição dos Serviços das Barbearias**: A página da barbearia foi configurada para mostrar os serviços oferecidos, proporcionando informações completas aos usuários.

### 6. Gerenciamento de Reservas
- **Criação do Componente BookingItem**: Foi adicionado o componente `BookingItem` para gerenciar a exibição de itens de reserva, facilitando a interação dos usuários com o sistema de reservas.

### 7. Melhorias e Correções
- **Correção do Avatar Import**: O caminho de importação do componente Avatar foi corrigido para garantir que ele seja carregado corretamente.
- **Adição de Git Hooks**: Git hooks foram configurados para automatizar tarefas como linting e testes antes de cada commit, garantindo a qualidade do código submetido ao repositório.

---

Com este passo a passo, é possível entender a evolução do projeto e como as diferentes funcionalidades e melhorias foram implementadas ao longo do tempo.
