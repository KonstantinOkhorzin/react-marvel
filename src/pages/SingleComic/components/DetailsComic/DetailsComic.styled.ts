import styled from '@emotion/styled';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 30px;
  justify-content: space-between;
  align-items: start;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 293px 1fr;
  gap: 50px;
  padding-top: 11px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
  }
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
