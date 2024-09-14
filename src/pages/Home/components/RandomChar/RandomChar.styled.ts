import styled from '@emotion/styled';

import mjolnir from '../../../../assets/img/mjolnir.png';

export const Wrapper = styled.div`
  grid-area: rc;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 250px;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: calc(100% + 2 * 15px);
    margin: 0 -15px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-rows: auto;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const DynamicBlock = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StaticBlock = styled.div`
  padding: 35px 40px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.background};
  background-image: url(${mjolnir});
  background-repeat: no-repeat;
  background-size: 203px 189px;
  background-position: bottom 14px right -37px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 15px;
  }
`;
