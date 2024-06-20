import styled from "styled-components";

// "container flex justify-center items-center w-full h-screen py-20 h-30 px-8 bg-background"
export const Container = styled.section<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;
