import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 293px 550px;
  column-gap: 50px;
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
