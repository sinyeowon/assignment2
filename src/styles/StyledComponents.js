import styled from "styled-components";
import { colors } from "./theme";

export const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${colors.bg};
`;

export const DashboardWrapper = styled.div`
  width: 260px;
  padding: 16px;
  background: ${colors.cardBg};
  box-shadow: 0 2px 8px ${colors.shadow};
  border-radius: 12px;
  margin: 24px;
`;

export const ListWrapper = styled.div`
  flex: 1;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 24px;
`;

export const Card = styled.div`
  background: ${colors.cardBg};
  box-shadow: 0 2px 6px ${colors.shadow};
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  display: block;
  cursor: pointer;
`;

export const CardTitle = styled.h4`
  margin: 8px 0;
  font-size: 1rem;
  color: #333;
`;

export const AddButton = styled.button`
  background: ${colors.primary};
  color: ${colors.accent};
  border: none;
  border-radius: 20px;
  padding: 6px 12px;
  font-weight: bold;
  margin-bottom: 12px;
`;
