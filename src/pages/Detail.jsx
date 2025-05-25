import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../mock.js";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 8px;
`;

const Image = styled.img`
  width: 200px;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #333;
`;

const BackButton = styled.button`
  margin-top: 20px;
  background-color: #eee;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export default function Detail() {
  const nav = useNavigate();
  const params = new URLSearchParams(useLocation().search);
  const id = +params.get("id");
  const p = MOCK_DATA.find((x) => x.id === id);

  if (!p) return <InfoText>존재하지 않는 포켓몬입니다.</InfoText>;

  return (
    <Container>
      <Title>{p.korean_name}</Title>
      <Image src={p.img_url} alt={p.korean_name} />
      <InfoText>타입: {p.types.join(", ")}</InfoText>
      <InfoText>{p.description}</InfoText>
      <BackButton onClick={() => nav(-1)}>뒤로 가기</BackButton>
    </Container>
  );
}
