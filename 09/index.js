const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
];

let posicaoCarlos = -1; 

for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].nome == "Carlos") {
        posicaoCarlos = i + 1;
        break; 
    }
}

if (posicaoCarlos != -1) {
    console.log(`Galera... O Carlos est� na posição ${posicaoCarlos}, corre lá!`);
} else {
    console.log("O Carlos n�o foi encontrado na lista de participantes.");
}
