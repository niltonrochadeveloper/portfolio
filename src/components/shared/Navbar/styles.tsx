"use client";

import styled, { keyframes } from "styled-components";
import {
  FaBars as RIFaBars,
  FaHome,
  FaWindowClose as RIFaWindowClose,
} from "react-icons/fa";
import { NavProps } from "./types";

export const Container = styled.section``;
export const Article = styled.article``;
export const Content = styled.div``;
const animatePosition = keyframes`
  0% {
    transform: translateX(-240px)
  }
  100% {
    transform: translateX(0px)
  }
`;
const animatePositionClose = keyframes`
  0% {
    transform: translateX(0px)
  }
  100% {
    transform: translateX(-240px)
  }
`;
export const ContentList = styled.ul<{ $showMenu: boolean }>`
  gap: 1.6rem;
  font-weight: 600;
  align-items: center;
  height: 100%;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    color: ${({ theme }) => theme.colors.text};
    display: flex;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 100;
    height: 100%;
    width: 240px;
    /* ${(props) => (props.$showMenu ? "position: fixed" : "display: none")}; */
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 60px;
    flex-direction: column;
    gap: 1rem;
    color: black;
    align-items: flex-start;
    animation: ${({ $showMenu }) =>
        $showMenu ? animatePosition : animatePositionClose}
      0.3s ease-in-out;
  }
`;

export const List = styled.li``;

export const FaBars = styled(RIFaBars)<{ $showMenu: boolean }>`
  font-size: 1.1rem;
  /* margin-top: 12px; */
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    visibility: ${({ $showMenu }) => ($showMenu ? "hidden" : "visible")};
  }
`;

export const FaWindowClose = styled(RIFaWindowClose)<{ $showMenu: boolean }>`
  font-size: 1.1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    visibility: hidden;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${(props) => (props.$showMenu ? "position: fixed" : "visibility: hidden")};
    z-index: 11;
    left: 210px;
    top: 16px;
    color: ${({ theme }) => theme.colors.background};
  }
`;
export const BackDrop = styled.div<{ $showMenu: boolean }>`
  background-color: ${({ theme }) => theme.colors.text};
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.2;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${(props) => (props.$showMenu ? "position: fixed" : "display: none")};
  }
`;