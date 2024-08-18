import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 50px;
  max-width: 1130px;
  margin: 0 auto;
  padding: 50px 15px;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 15px;
    row-gap: 20px;
  }
`;
