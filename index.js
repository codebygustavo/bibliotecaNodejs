// index.js

const chalk = require("chalk");
const fs = require("fs");

function extrairLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayDeResultados = [];
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrayDeResultados.push({ [temp[1]]: [temp[2]].join() });
  }
  return arrayDeResultados.length === 0 ? 'Não há Links' : arrayDeResultados;
}

async function pegarArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return extrairLinks(texto);
  } catch (erro) {
    tratamentoDeErro(erro);
  }
}

function tratamentoDeErro(erro) {
  throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho.'));
}

module.exports = pegarArquivo;