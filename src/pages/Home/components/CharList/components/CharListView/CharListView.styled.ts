import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  grid-area: cl;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 200px));
  gap: 25px 30px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, minmax(150px, 200px));
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(1, minmax(150px, 200px));
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, minmax(150px, 200px));
    gap: 10px;
  }
`;
