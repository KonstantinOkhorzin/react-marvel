import styled from '@emotion/styled';

export const Header = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  column-gap: 25px;
`;

interface PosterProps {
  path: string;
}

const defaultImages: string[] = [
  'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif',
  'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
];

const isDefaultImage = (path: string, images: string[]): boolean => images.includes(path);

export const Poster = styled.img<PosterProps>`
  height: 150px;
  margin: 0 auto;
  object-fit: ${({ path }) => (isDefaultImage(path, defaultImages) ? 'unset' : 'cover')};
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

export const ComicList = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;
