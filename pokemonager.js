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
       return fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
       .then(fetchedData => fetchedData.json())
       .then(pokemons => {
         return Promise.all(
           pokemons.results.map(pokeInfo => fetch(pokeInfo.url))
         )
       })
       .then(pokemonUrl => {
         return Promise.all(
           pokemonUrl.map(data => data.json())
         )
       })
       .then(mappedData => {
         return mappedData.filter(pokemon => pokemon.weight < weight)
       })
    }    
  }
    window.Pokemonager = Pokemonager;
  })();
  