import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonContainer = styled.div`
  flex: 1px;
  padding: 20px;
`;

const PokemonSorting = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function PokemonList({ pokemons, caught, onAdd }) {
  return (
    <PokemonContainer>
      <h2>포켓몬 리스트</h2>
      <PokemonSorting>
        {pokemons.map((p) => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            isCaught={caught.includes(p.id)}
            onAdd={onAdd}
          />
        ))}
      </PokemonSorting>
    </PokemonContainer>
  );
}
