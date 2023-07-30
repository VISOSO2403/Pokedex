import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';

import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from '../interfaces/pokemonInterfaces';

const usePokemonPaginated = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonPaginatedResponse>(
      nextPageUrl.current,
    );
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    pokemonList.forEach(poke => console.log(poke.name));
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    simplePokemonList,
  };
};

export default usePokemonPaginated;
