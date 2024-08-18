import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.animation.transform};
  outline: none;
  :hover,
  :focus {
    transform: translateY(-5px);
  }
`;

export const Poster = styled.img`
  min-height: 346px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    min-height: auto;
  }
`;

export const Title = styled.h3`
  margin-top: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  line-height: ${({ theme }) => theme.lineHeights.heading};
`;

export const Price = styled.p`
  margin-top: 5px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
`;
