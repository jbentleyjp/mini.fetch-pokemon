(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    async findNames(n) {
      let resolvePoke = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${n}`);
      const pokemons = await resolvePoke.json();
      return pokemons.results.map(pokemon => pokemon.name);
    }
    // This should return an array of all the Pokemon that are under a particular weight.

    async findUnderWeight(weight) {
      let resolvePoke = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
      // console.log(resolvePoke)
      const pokemons = await resolvePoke.json();
      console.log('pokemons :', pokemons);

      const mPoke

      // const mappedPoke = await pokemons.results.map((pokeInfo) =>{
      //   return fetch(pokeInfo["url"])
      // });

      console.log('mappedPoke :', mappedPoke);

     return Promise.all(
       mappedPoke.json()
      ).then((pokeResults) =>{
        // console.log(pokeResults)
      }) 
      // console.log(cleanMappedPoke);



      
      
      
      // Promise.all([
      //   pokemons.results.map(pokemon => {
      //     await fetch(pokemon.url)
      //  })

      // ]).then((someMagicData) => {

      // } )
      // console.log(someMagicData)     
    }






    
  }
    window.Pokemonager = Pokemonager;
  })();
  
  // ** LIMIT TO THE FIRST 10 POKEMON
  // We don't want to make too many unnecessary calls to the Pokemon API