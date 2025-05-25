import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonSet = styled.div`
  width: 120px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
`;

const PokemonImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

const PokemonName = styled.h4`
  margin: 8px 0 4px;
`;

const PokemonNumber = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.85rem;
`;

const SelectButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#ccc" : "green")};
  color: white;
  border-radius: 5px;
  border: none;
  padding: 6px 12px;
  margin-top: 8px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;

export default function PokemonCard({ pokemon, isCaught, onAdd }) {
  const nav = useNavigate();

  return (
    <PokemonSet>
      <PokemonImage
        src={pokemon.img_url}
        alt={pokemon.korean_name}
        onClick={() => nav(`/detail?id=${pokemon.id}`)}
      />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonNumber>No. {String(pokemon.id).padStart(3, "0")}</PokemonNumber>
      <SelectButton onClick={() => onAdd(pokemon)} disabled={isCaught}>
        {isCaught ? "✔ 선택됨" : "추가"}
      </SelectButton>
    </PokemonSet>
  );
}
