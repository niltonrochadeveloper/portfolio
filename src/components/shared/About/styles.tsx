"use client";
import styled from "styled-components";

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const Paragraph = styled.p`
  color: #d4d4d4;
  font-size: 0.875rem;
  line-height: 1.6rem;
  letter-spacing: 0.045rem;
`;
