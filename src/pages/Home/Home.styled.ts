import styled from '@emotion/styled';

export const InnerMainWrapper = styled.main`
  position: relative;
  display: grid;
  align-items: start;
  grid-template-columns: minmax(450px, 650px) minmax(225px, 425px);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'rc rc'
    'cl s';
  column-gap: 25px;
  row-gap: 50px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      'rc rc'
      'cl cl'
      's s';
  }
`;

export const Decoration = styled.img`
  position: absolute;
  right: -174px;
  bottom: -70px;
  z-index: -1;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    right: 0;
  }
`;
