import styled from '@emotion/styled';

import avengers from '../../../../assets/img/Avengers.png';
import avengersLogo from '../../../../assets/img/Avengers_logo.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.dark};
  background-image: url(${avengers}), url(${avengersLogo});
  background-repeat: no-repeat, no-repeat;
  background-size: 152px 100px, 133px 100px;
  background-position: 45px, calc(100% - 25px);
  padding: 18px 0 18px 280px;
  margin: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: calc(100% + 2 * 15px);
    margin: 0 -15px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 0 18px 170px;
    background-position: 15px, calc(100% - 15px) 15px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 0 18px 15px;
    background-image: url(${avengersLogo});
    background-position: calc(100% - 15px) 15px;
  }
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme }) => theme.colors.background};
`;
