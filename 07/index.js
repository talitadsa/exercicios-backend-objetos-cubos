const livro = {
    nome: 'O poder do h�bito',
    capitulos: [
        {
            nome: "O loop do h�bito",
        },
        {
            nome: "O c�rebro ansioso",
        },
        {
            nome: "A regra de ouro da mudan�a de h�bito",
        },
        {
            nome: "H�bitos angulares, ou a balada de Paul O`neill",
        },
        {
            nome: "Starbucks e o h�bito do sucesso",
        },
        {
            nome: "O poder de uma crise",
        },
        {
            nome: "Como a target sabe o que voc� quer antes que voc� saiba",
        },
        {
            nome: "A Saddleback Church e o boicote aos �nibus de Montgomery",
        },
        {
            nome: "A neurologia do livre-arb�trio",
        },
    ]
};

for (let i = 0; i < livro.capitulos.length; i++) {
    livro.capitulos[i].numero = i + 1;
}

console.log(livro);
