const obtenerAleatorio = (min, max) => {

    return Math.floor(Math.random() * (max - min + 1) + min);
}

const obtenerIdPokemon = () => {

    const pokemonArr = [];

    for (let i = 0; i < 4; i++) {

        pokemonArr.push(obtenerAleatorio(1, 600));
    }
    return pokemonArr;

}

async function consumirApi(id) {
    const { name } = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(result => result.json());
    return name;
}

const obtenerNombresPokemons = async (vector) => {

    const vectorNombres = [];

    for (let i = 0; i < vector.length; i++) {
        const name = await consumirApi(vector[i]);
        vectorNombres.push({apellido:name, valor: vector[i]});
        
    }

    console.table(vectorNombres)
    return vectorNombres;
  
}

const obtenerIdPokemonFachada = async () => {

   return  await obtenerNombresPokemons(obtenerIdPokemon());
}

export default obtenerIdPokemonFachada;