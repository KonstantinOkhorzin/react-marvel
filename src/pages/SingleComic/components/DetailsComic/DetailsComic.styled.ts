import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 293px 550px auto;
  column-gap: 50px;
  align-items: start;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.body};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;

export const Price = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme }) => theme.colors.main};
`;

export const LinkToBack = styled(Link)`
  justify-self: end;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  transition: ${({ theme }) => theme.animation.color};
  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }
`;
