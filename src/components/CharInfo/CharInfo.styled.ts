import styled from '@emotion/styled';

export const Header = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  column-gap: 25px;
`;

interface PosterProps {
  isDefaultImage: boolean;
}

export const Poster = styled.img<PosterProps>`
  height: 150px;
  margin: 0 auto;
  object-fit: ${({ isDefaultImage }) => (isDefaultImage ? 'unset' : 'cover')};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

export const Description = styled.p`
  margin-top: 15px;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;

export const ComicsList = styled.ul`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ComicsItem = styled.li`
  width: 100%;
  padding: 4px 10px 3px;
  font-size: ${({theme}) => theme.fontSizes.extraSmall};
  line-height: ${({theme}) => theme.lineHeights.body};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
