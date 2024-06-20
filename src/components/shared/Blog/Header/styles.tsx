"use client";

import NextLink, { LinkProps } from "next/link";
import styled from "styled-components";
import {
  Container as HeaderContainer,
  Link as LinkContainer,
  LogoTitle as LogoTitleContainer,
} from "../../Header/styles";

export const Container = styled(HeaderContainer)<any>``;

export const Link = styled(LinkContainer)<LinkProps>``;

export const LogoTitle = styled(LogoTitleContainer)``;
