import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  column-gap: 25px;
  row-gap: 30px;
`;

export const Item = styled.li`
  width: 200px;
  height: 318px;
  background-color: ${({ theme }) => theme.colors.dark};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  img {
    height: 200px;
    object-fit: cover;
  }
`;

export const Name = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme }) => theme.colors.background};
  text-transform: uppercase;
  padding: 15px;
`;
