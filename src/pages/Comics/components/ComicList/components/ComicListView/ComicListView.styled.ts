import styled from '@emotion/styled';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  justify-content: center;
  gap: 55px 66px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
    gap: 40px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
  }
`;
