"use client";

import styled from "styled-components";

export const Container = styled.section`
  background-color: #0c0811;
  color: #fff;
  height: auto;
  padding: 0 100px;
`;
export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 2.5rem;
  @media screen and (min-width: 767px) {
  }
`;
export const ContentTitle = styled.div`
  flex-direction: column;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
`;
export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.025rem;
`;
export const Description = styled.p`
  letter-spacing: 0.025rem;
`;
export const Card = styled.div`
  border-color: #f2f2f2;
  border-width: 0.5px;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.2rem;
  min-height: 240px;
  height: 100%;
`;
