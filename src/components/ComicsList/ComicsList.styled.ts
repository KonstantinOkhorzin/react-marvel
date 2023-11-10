import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 225px);
  justify-content: space-between;
  row-gap: 55px;
`;

export const Item = styled.li`
  transition: ${({ theme }) => theme.animation.transform};
  :hover {
    transform: translateY(-5px);
  }
`;

export const Poster = styled.img`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h3`
  margin-top: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  line-height: ${({ theme }) => theme.lineHeights.heading};
`;

export const Price = styled.p`
  margin-top: 5px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
`;
