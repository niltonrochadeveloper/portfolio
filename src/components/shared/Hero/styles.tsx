import styled from "styled-components";

export const Root = styled.div`
  background-color: #0c0811;
  color: #fff;
  height: 90.2vh;
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
  margin-top: 1.2rem;
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
