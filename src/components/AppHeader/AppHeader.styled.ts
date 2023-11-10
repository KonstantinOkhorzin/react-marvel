import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
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

export const LinkList = styled.ul`
  display: flex;
  gap: 8px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  a {
    transition: ${({ theme }) => theme.animation.color};
    :hover {
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;
