const fetch = require('node-fetch')
// http_validacao.js
function manejarErros(erro) {
    throw new Error(erro.message)
}

async function checarStatus(arrayDeURLs) {
    try {
    // promisses async await
    const arrayDeStatus = await Promise
        .all(arrayDeURLs
            .map(async url => {
            const res = await fetch(url)
            return res.status;
        }))    
    return arrayDeStatus;
    }catch (erro){
        manejarErros(erro);
    }

}

function gerarArrayDeURLs(arrayDeResultados) {
  return arrayDeResultados
    .map(objetoLink => Object
        .values(objetoLink).join());
}

async function validarURLs(arrayDeResultados) {
  const links = gerarArrayDeURLs(arrayDeResultados);
  const statusDosLinks = await checarStatus(links)
  // spread operator
     const resultados = arrayDeResultados.map((objeto, indice) => ({ 
        ...objeto, 
        status: statusDosLinks[indice] 
    }))
    return resultados
}

module.exports = validarURLs;