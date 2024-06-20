"use client";

import styled from "styled-components";
import { NavProps } from "./types";
import {
  Container as NavBarContainer,
  Article as NavBarArticle,
  BackDrop as NavBarBackDrop,
  Content as NavBarContent,
  ContentList as NavBarContentList,
  FaBars as NavBarFaBars,
  FaWindowClose as NavBarFaWindowClose,
  List as NavBarList,
  animatePosition,
  animatePositionClose,
} from "../../Navbar/styles";

export const Container = styled(NavBarContainer)``;
export const Article = styled(NavBarArticle)``;
export const Content = styled(NavBarContent)``;

export const ContentList = styled(NavBarContentList)<{ $showMenu: boolean }>``;

export const List = styled(NavBarList)``;

export const FaBars = styled(NavBarFaBars)<{ $showMenu: boolean }>``;

export const FaWindowClose = styled(NavBarFaWindowClose)<{
  $showMenu: boolean;
}>``;
export const BackDrop = styled(NavBarBackDrop)<{ $showMenu: boolean }>``;
