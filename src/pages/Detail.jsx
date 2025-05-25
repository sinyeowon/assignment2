import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../mock.js";
import styled from "styled-components";

const PokemonDetail = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export default function Detail() {
  const nav = useNavigate();
  const params = new URLSearchParams(useLocation().search);
  const id = +params.get("id");
  const p = MOCK_DATA.find((x) => x.id === id);

  if (!p) return <p>존재하지 않는 포켓몬입니다.</p>;

  return (
    <PokemonDetail>
      <h1>{p.korean_name}</h1>
      <img src={p.img_url} alt={p.korean_name} width={200} />
      <p>타입: {p.types.join(", ")}</p>
      <p>{p.description}</p>
      <button onClick={() => nav(-1)}>뒤로 가기</button>
    </PokemonDetail>
  );
}
