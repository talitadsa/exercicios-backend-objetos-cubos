const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

for (const { nome, pets } of usuarios) {
    if (pets.length == 0) {
        console.log(`Sou ${nome} e não tenho pets.`);
    } else if (pets.length == 1) {
        console.log(`Sou ${nome} e tenho 1 pet.`);
    } else {
        console.log(`Sou ${nome} e tenho ${pets.length} pets.`);
    }
}
