import React from "react";
import styled from "styled-components";
import { usePokemon } from "../contexts/PokemonContext";
import MOCK_DATA from "../mock.js";

const SelectedContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 10px auto 24px;
  border-radius: 12px;
  padding: 24px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  justify-items: center;
`;

const SelectedCard = styled.div`
  width: 120px;
  padding: 12px;
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const RemoveButton = styled.button`
  background: #ff4f4f;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
`;

const SelectedImage = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 auto 8px;
  cursor: pointer;
`;

const EmptySlot = styled.div`
  width: 120px;
  height: 160px;
  border: 2px dashed #ccc;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyImage = styled.img`
  width: 48px;
  height: 48px;
  opacity: 0.5;
`;

const Name = styled.h4`
  margin: 4px 0;
`;

const Number = styled.p`
  margin: 4px 0;
  color: #666;
  font-size: 0.85rem;
`;

export default function Dashboard() {
  const { slots, removePokemon } = usePokemon();

  return (
    <SelectedContainer>
      {slots.map((id, idx) => {
        if (id !== null) {
          const p = MOCK_DATA.find((x) => x.id === id);
          return (
            <SelectedCard key={idx}>
              <SelectedImage
                src={p.img_url}
                alt={p.korean_name}
                onClick={() => removePokemon(p)}
              />
              <Name>{p.korean_name}</Name>
              <Number>No. {String(p.id).padStart(3, "0")}</Number>
              <RemoveButton onClick={() => removePokemon(p)}>삭제</RemoveButton>
            </SelectedCard>
          );
        }
        return (
          <EmptySlot key={idx}>
            <EmptyImage
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
              alt="empty slot"
            />
          </EmptySlot>
        );
      })}
    </SelectedContainer>
  );
}
