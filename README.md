# Roteiro de Testes Cypress

Este projeto contém testes automatizados para verificar as principais funcionalidades do sistema. Os testes foram realizados utilizando **Cypress** e cobrem os seguintes cenários:

## Funcionalidades Testadas

### 1. Cadastro de Usuários
- **Sucesso**: Testa o cadastro de novos usuários com dados válidos.
- **Erro**: Verifica se o sistema exibe mensagens de erro ao tentar cadastrar com dados inválidos.

### 2. Login
- **Sucesso**: Garante que o login é efetuado corretamente com credenciais válidas.
- **Erro**: Testa a rejeição de credenciais inválidas.

### 3. Upload de Foto
- **Sucesso**: Valida o upload de fotos e o armazenamento no servidor.

### 4. Interações
- **Curtir Foto**: Testa se o botão "Curtir" incrementa corretamente o número de curtidas.
- **Comentários**: Verifica se o envio de comentários e curtidas funciona como esperado.

Os testes foram desenvolvidos para garantir a integridade das funcionalidades principais e fornecer feedback rápido sobre o estado da aplicação.
