(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    async findNames(n) {
      let resolvePoke = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${n}`);
      const pokemons = await resolvePoke.json();
      return pokemons.results.map(pokemon => pokemon.name);
    }
    // This should return an array of all the Pokemon that are under a particular weight.

    findUnderWeight(weight) {
      // Your code here.
      // ** LIMIT TO THE FIRST 10 POKEMON
      // We don't want to make too many unnecessary calls to the Pokemon API
    }
  }

  window.Pokemonager = Pokemonager;
})();
