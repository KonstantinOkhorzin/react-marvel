import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 50px;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  span {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const NavList = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 8px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: ${({ theme }) => theme.lineHeights.heading};
`;
