﻿# Formulario-API

# API de Cadastro de Empresas
Esta é a API desenvolvida em Node.js para gerenciar empresas com as seguintes características:
- Cadastro de empresas com campos como Nome do Cliente, Senha, CNPJ, CEP, Endereço, Número, Telefone e Email.
- Utilização do MySQL como armazenamento de dados dos clientes.
- Fornecimento de endpoints para criar, listar, consultar, atualizar e excluir empresas.

## Endpoints da API
- `POST /api/empresas`: Crie uma nova empresa.
- `GET /api/empresas`: Liste todas as empresas cadastradas.
- `PUT /api/empresas: Atualize os dados de uma empresa.
- `DELETE /api/empresas: Exclua uma empresa.

## Requisitos
- Node.js
- MySQL

## Como Usar
1. Clone este repositório.
2. Execute `npm install` para instalar as dependências.
3. Configure as variáveis de ambiente no arquivo `.env` para a conexão com o banco de dados.
4. Execute `npm start` para iniciar o servidor.
5. Acesse a API em `http://localhost:3000/api/empresas`.

## Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

