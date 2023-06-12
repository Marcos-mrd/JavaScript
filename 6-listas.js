console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saopaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`
);

listaDeDestinos.push(`Curitiba`); //adicionando item a listas

listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);


console.log(`Lista de convidados`);

const listaDeConvidado =  new Array(
    "Marcos",
    "Rian",
    "Daniel"
);

listaDeConvidado.push("kaique");

console.log(`Lista de convidados para minha festa`);


listaDeConvidado.splice(0,1);

console.log(listaDeConvidado);

console.log(listaDeConvidado[1]);