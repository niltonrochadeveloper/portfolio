import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background-color: #0c0811;
  /* background: linear-gradient(
    90deg,
    rgba(2, 25, 35, 1) 0%,
    rgba(2, 25, 35, 0.9) 35%,
    rgba(2, 25, 35, 1) 100%
  ); */
  color: #fff;
  height: 100vh;
  @media screen and (min-width: 767px) {
    padding: 0 100px;
  }
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div``;
export const Social = styled.div`
  display: flex;
  margin-top: 1.8rem;
  gap: 3rem;
`;
export const Small = styled.small``;

export const H1 = styled.h1`
  font-size: 3rem;
  letter-spacing: 1.6px;
  max-width: 560px;
  line-height: 3.2rem;
  font-weight: 600;
`;
