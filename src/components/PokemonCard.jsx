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

const SelectButton = styled.button`
  background-color: green;
  color: white;
  border-radius: 5px;
  margin: 5px;
`;

export default function PokemonCard({ pokemon, isCaught, onAdd }) {
  const nav = useNavigate();
  return (
    <PokemonSet>
      <img
        src={pokemon.img_url}
        alt={pokemon.korean_name}
        width="100%"
        style={{ cursor: "pointer" }}
        onClick={() => nav(`/detail?id=${pokemon.id}`)}
      />
      <h4>{pokemon.korean_name}</h4>
      <p>No. {String(pokemon.id).padStart(3, "0")}</p>
      <SelectButton onClick={() => onAdd(pokemon)}>
        {isCaught ? "✔ 선택됨" : "추가"}
      </SelectButton>
    </PokemonSet>
  );
}
