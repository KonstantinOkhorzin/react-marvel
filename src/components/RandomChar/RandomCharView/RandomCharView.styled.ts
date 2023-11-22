import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 35px 35px 35px 40px;
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 30px;
  align-items: start;
  img {
    height: 180px;
    object-fit: contain;
  }
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