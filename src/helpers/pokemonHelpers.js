const obtenerIdPokemon=()=>{

const pokemonArr = [];

for (let i = 0; i < 4; i++) {

    pokemonArr.push(obtenerAleatorio(1,600));

}

console.table(pokemonArr);

return pokemonArr;


}

const  obtenerNombresPokemons=()=>{



}

function consumirApi(id){

    
}


const obtenerAleatorio=(min, max)=>{

    return Math.floor(Math.random()*(max-min+1)+min);
}


const obtenerIdPokemonFachada=()=>{


    obtenerIdPokemon();
    obtenerAleatorio();

}

export default obtenerIdPokemonFachada;