# Roteiro de Testes Cypress

Este documento descreve o roteiro dos testes automatizados realizados utilizando **Cypress**, abordando as funcionalidades de cadastro, login, upload de fotos e interações com a aplicação.

## 1. Cadastro de Novos Usuários

### 1.1 - Cadastro de usuário com informações corretas
- **Objetivo**: Verificar se um novo usuário pode ser cadastrado com dados válidos.
- **Passos**:
  1. Acessar a página de cadastro.
  2. Preencher o formulário com nome, email e senha válidos.
  3. Clicar no botão "Cadastrar".
  4. Validar que o cadastro foi realizado com sucesso.

### 1.2 - Tentativa de cadastro com dados inválidos
- **Objetivo**: Garantir que o sistema bloqueie tentativas de cadastro com dados inválidos.
- **Passos**:
  1. Acessar a página de cadastro.
  2. Preencher o formulário com email inválido ou senha fraca.
  3. Clicar no botão "Cadastrar".
  4. Validar que o sistema exibe as mensagens de erro corretas.

## 2. Login

### 2.1 - Login com credenciais corretas
- **Objetivo**: Garantir que o usuário consiga fazer login com credenciais válidas.
- **Passos**:
  1. Acessar a página de login.
  2. Preencher o campo de email com um endereço válido.
  3. Preencher o campo de senha com uma senha correta.
  4. Clicar no botão de login.
  5. Validar que o login foi realizado com sucesso.

### 2.2 - Login com credenciais incorretas
- **Objetivo**: Verificar se o sistema bloqueia tentativas de login com credenciais inválidas.
- **Passos**:
  1. Acessar a página de login.
  2. Preencher o campo de email com um endereço inválido.
  3. Preencher o campo de senha com uma senha incorreta.
  4. Clicar no botão de login.
  5. Validar que o sistema retorna a mensagem de erro apropriada.

## 3. Upload de Foto

### 3.1 - Upload de uma nova foto
- **Objetivo**: Verificar se o upload de fotos está funcionando corretamente.
- **Passos**:
  1. Acessar a página de upload de fotos.
  2. Selecionar uma imagem do computador.
  3. Clicar no botão "Upload".
  4. Validar que a foto foi enviada e armazenada corretamente no servidor.

### 3.2 - Teste de API - Envio de fotos
- **Objetivo**: Verificar que a API de upload de fotos funciona corretamente.
- **Passos**:
  1. Fazer uma requisição POST para o endpoint de upload de fotos.
  2. Anexar uma imagem válida à requisição.
  3. Verificar que a API responde com sucesso.
  4. Validar que a imagem foi armazenada no servidor.

## 4. Interações

### 4.1 - Curtir uma foto com sucesso
- **Objetivo**: Garantir que o botão de "Curtir" funciona corretamente.
- **Passos**:
  1. Acessar a página de uma foto.
  2. Clicar no botão "Curtir".
  3. Verificar se o número de curtidas foi incrementado.
  4. Validar que a interação foi registrada no sistema.

### 4.2 - Fazer e curtir comentários em uma foto
- **Objetivo**: Testar a funcionalidade de comentar e curtir comentários em uma foto.
- **Passos**:
  1. Acessar a página de uma foto.
  2. Escrever um comentário no campo de texto.
  3. Clicar no botão "Enviar comentário".
  4. Curtir o comentário recém-enviado.
  5. Validar que o comentário e a curtida foram registrados com sucesso.

---

Este roteiro cobre os principais pontos testados na aplicação utilizando Cypress, divididos em categorias de **Cadastro**, **Login**, **Upload de Fotos** e **Interações**. Cada teste foi automatizado para garantir que as funcionalidades estão funcionando conforme o esperado e que comportamentos inválidos são devidamente tratados.
