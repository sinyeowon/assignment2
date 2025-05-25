import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: "center";
  margin-top: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 200px;
  align-items: center;
`;

export default function Home() {
  const nav = useNavigate();
  return (
    <Container>
      <h1>나만의 포켓몬 도감</h1>
      <button onClick={() => nav("/dex")}>포켓몬 도감 시작하기</button>
    </Container>
  );
}
