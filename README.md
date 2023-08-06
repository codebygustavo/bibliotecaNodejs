<h1 align="center"> Biblioteca em Node.js </h1>
status: done

## Descrição

Este repositório foi criado com o propósito de ser um espaço dedicado ao estudo e armazenamento de informações relacionadas à minha primeira biblioteca em Node.js. A biblioteca está sendo desenvolvida como parte do meu aprendizado e crescimento como desenvolvedor.

O objetivo principal deste projeto é criar uma biblioteca funcional em Node.js que atenda a um propósito específico. A ideia é aprofundar meus conhecimentos em Node.js, JavaScript, gerenciamento de pacotes com npm, testes unitários, versionamento de código com Git e outras práticas de desenvolvimento.

## Solução

O intuito da biblioteca é trabalhar no contexto de um blog de programação, resolvendo problemas relacionados a links quebrados. Resumidamente, em blogs é comum utilizar links externos, seja com informações extras ou fontes de pesquisa, e pode ocorrer que, por ter muitos links, alguns se percam ou deixem de "funcionar", causando o erro 404. A biblioteca busca solucionar este problema, gerenciando os links do post.

## Funcionalidades Planejadas

- Identificar links quebrados em um texto ou página HTML.
- Verificar a disponibilidade dos links externos.
- Relatar os links que não estão funcionando corretamente.
- Oferecer opções para corrigir, remover ou substituir os links inválidos.

## Como Contribuir

Se você deseja contribuir para o projeto, sinta-se à vontade para fazer um fork deste repositório, criar uma branch com suas alterações e enviar um pull request. Toda ajuda é bem-vinda!

## Como executar o projeto

Para executar o projeto, siga os passos abaixo:

1. Clone o repositório em sua máquina local:

```bash
git clone https://github.com/codebygustavo/bibliotecaNodejs.git
```

2. Sete o local de download no terminal
```bash
cd /caminho/absoluto/da/pasta/pasta
```
3. Instale as dependencias do arquivo packege.json
```bash
npm install
```

4. Faça a verificação do arquivo .md
```bash
node cli.js /caminho/do/arquivo.dm
```

ou utilize os arquivos já disponibilizados no repositório:

```bash
npm run cli validar
```

### Resultado

Após executar o comando de verificação, o terminal exibirá todos os links que estão no arquivo .dm desejado, juntamente com seu status.

#### Status dos Links
+ Link Funcional: Status 200-299 (OK)
+ Link Redirecionado: Status 300-399 (Redirecionado)
+ Link não Funcional: Status 400-499 e 500-599 (Erro do cliente ou do servidor)
  
Sinta-se à vontade para utilizar o projeto e aprimorá-lo conforme suas necessidades. Caso tenha alguma dúvida ou sugestão, fique à vontade para contribuir com o repositório.
