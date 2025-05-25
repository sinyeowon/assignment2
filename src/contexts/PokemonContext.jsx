import React, { createContext, useState, useContext } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [slots, setSlots] = useState(Array(6).fill(null));

  const addPokemon = (p) => {
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
    const next = slots.map((id) => (id === p.id ? null : id));
    setSlots(next);
  };

  const caughtIds = slots.filter((x) => x !== null);

  return (
    <PokemonContext.Provider
      value={{ slots, caughtIds, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}
