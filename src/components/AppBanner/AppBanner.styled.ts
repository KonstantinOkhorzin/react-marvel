import styled from '@emotion/styled';

import avengers from '../../assets/img/Avengers.png';
import avengersLogo from '../../assets/img/Avengers_logo.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.dark};
  background-image: url(${avengers}), url(${avengersLogo});
  background-repeat: no-repeat, no-repeat;
  background-size: 152px 100px, 133px 100px;
  background-position: 45px, calc(100% - 25px);
  padding: 18px 0 18px 280px;
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme }) => theme.colors.background};
`;
