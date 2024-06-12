"use client";

import NextLink, { LinkProps } from "next/link";
import styled, { useTheme } from "styled-components";

export const Header = styled.header<any>`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  height: 42px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0 100px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0 20px;
  }
`;

export const Link = styled(NextLink)<LinkProps>`
  cursor: pointer;
`;

export const LogoTitle = styled.h2`
  font-size: 1.875rem;
  line-height: 2.25rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    color: ${({ theme }) => theme.colors.text};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    color: ${({ theme }) => theme.colors.text};
  }
`;
