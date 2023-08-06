const pegarArquivo = require('../index.js');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegarArquivo::', () => {
    it('Dever ser uma função', () => {
        expect(typeof pegarArquivo).toBe('function');
    });
    it('Deve retornar array com resultados', async () => {
        const resultado = await pegarArquivo('C:/Users/Simple/Documents/estudos/desenvolvimento/nodejs/LIB-MARCKDOWN/test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResult)
    })
    it('Deve retornar mensagem "Não há links"', async () => {
        const resultado = await pegarArquivo('C:/Users/Simple/Documents/estudos/desenvolvimento/nodejs/LIB-MARCKDOWN/test/arquivos/texto2.md')
        expect(resultado).toBe('Não há Links');
    });
});