import React, { useState } from "react";
import MOCK_DATA from "../mock.js";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24;
  padding: 24px 0;
`;

export default function Dex() {
  // 6칸 고정 슬롯: null=빈칸, 숫자=포켓몬 ID
  const [slots, setSlots] = useState(Array(6).fill(null));

  const addPokemon = (p) => {
    console.log("adding", p.id, "current slots", slots);

    if (slots.includes(p.id)) {
      return alert("이미 선택된 포켓몬입니다.");
    }
    const idx = slots.findIndex((x) => x === null);
    if (idx === -1) {
      return alert("6마리까지만 선택 가능해요.");
    }
    const next = [...slots];
    next[idx] = p.id;
    setSlots(next);
  };

  const removePokemon = (p) => {
    const idx = slots.findIndex((x) => x === p.id);
    if (idx === -1) return;
    const next = [...slots];
    next[idx] = null;
    setSlots(next);
  };

  // PokemonList 에는 단순히 ID 배열만 넘기기
  const caughtIds = slots.filter((x) => x !== null);

  return (
    <PokemonCard>
      <h1>나만의 포켓몬</h1>
      <Dashboard slots={slots} onRemove={removePokemon} />
      <PokemonList pokemons={MOCK_DATA} caught={caughtIds} onAdd={addPokemon} />
    </PokemonCard>
  );
}
