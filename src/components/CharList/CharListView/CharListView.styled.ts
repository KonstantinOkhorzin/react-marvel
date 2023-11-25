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

interface ItemProps {
  selected: boolean;
}

export const Item = styled.li<ItemProps>`
  width: 200px;
  height: 318px;
  background-color: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ selected }) =>
    selected ? '0 5px 20px #9F0013' : '5px 5px 10px rgba(0, 0, 0, 0.25)'};
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(${({ selected }) => (selected ? '-8px' : '0px')});
`;

interface PosterProps {
  isDefaultImage: boolean;
}

export const Poster = styled.img<PosterProps>`
  height: 200px;
  margin: 0 auto;
  object-fit: ${({ isDefaultImage }) => (isDefaultImage ? 'unset' : 'cover')};
`;

export const Name = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme }) => theme.colors.background};
  text-transform: uppercase;
  padding: 15px;
`;
