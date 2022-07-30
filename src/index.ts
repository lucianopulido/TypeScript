import {genericFunction} from "./generics/generics";
import {Hero} from "./interfaces/hero";
import {getPokemon} from "./generics/get-pokemon";
import {Pokemon} from "./decorators/pokemon";


/*console.log(genericFunction(1))

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunction<Hero>(deadpool))
getPokemon(4)
    .then(pokemon => pokemon.sprites.front_default)
    .catch(console.log)
    .finally(() => console.log('Fin de getPokemon'))*/

const charmander = new Pokemon('Charmander')
charmander.savePokemonToDB(1)