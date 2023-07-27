const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
};

const listaDeAulas = [
    {
        Identificador: "01",
        "Nome da aula": "Introdução a programação",
    },
    {
        Identificador: "02",
        "Nome da aula": "Variáveis",
    },
    {
        Identificador: "03",
        "Nome da aula": "Condicionais",
    },
    {
        Identificador: "04",
        "Nome da aula": "Arrays",
    },
];

curso.aulas = listaDeAulas;

console.log(curso);

