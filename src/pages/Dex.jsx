import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import MOCK_DATA from "../mock.js";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
`;

export default function Dex() {
  return (
    <Page>
      <h1>나만의 포켓몬</h1>
      <Dashboard />
      <PokemonList pokemons={MOCK_DATA} />
    </Page>
  );
}
