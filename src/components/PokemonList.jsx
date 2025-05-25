import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { usePokemon } from "../contexts/PokemonContext";

const PokemonContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const PokemonSorting = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function PokemonList({ pokemons }) {
  const { caughtIds, addPokemon } = usePokemon();

  return (
    <PokemonContainer>
      <h2>포켓몬 리스트</h2>
      <PokemonSorting>
        {pokemons.map((p) => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            isCaught={caughtIds.includes(p.id)}
            onAdd={addPokemon}
          />
        ))}
      </PokemonSorting>
    </PokemonContainer>
  );
}
