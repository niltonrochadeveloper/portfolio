"use client";

import styled from "styled-components";

export const Container = styled.div`
  background-color: #0c0811;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    padding: 0 100px;
  }
  @media screen and (max-width: 767px) {
    height: auto;
    padding: 28px;
  }
  gap: 60px;
  color: #f2f2f2;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  letter-spacing: 0.5px;
  display: flex;
  flex-direction: column;
  > :first-child {
    h2 {
      font-size: 2.5rem;
      font-weight: 600;
      max-width: 420px;
      line-height: 1.3;
    }
    @media screen and (max-width: 767px) {
      margin-top: 40px;
    }
  }
  > :last-child {
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, minmax(240px, 1fr));
      gap: 40px;
    }
    @media screen and (max-width: 767px) {
      display: flex;
      gap: 40px;
      flex-direction: column;
    }
  }
  > :last-child > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  > :last-child > div h2 {
    font-size: 1.125rem;
    font-weight: 600;
  }
  > :last-child > div p {
    font-size: 0.875rem;
    color: #d4d4d4;
  }
`;
