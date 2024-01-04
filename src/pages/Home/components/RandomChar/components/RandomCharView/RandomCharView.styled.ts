import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 35px 35px 35px 40px;
  display: grid;
  grid-template-columns: 180px 265px;
  gap: 30px;
  align-items: start;
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
  height: 180px;
  object-fit: ${({ path }) => (isDefaultImage(path, defaultImages) ? 'unset' : 'cover')};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Description = styled.p`
  flex-grow: 1;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  font-weight: ${({ theme }) => theme.fontWeights.body};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;

export const ButtonGroup = styled.div`
  margin-top: 13px;
  display: flex;
  gap: 30px;
`;
