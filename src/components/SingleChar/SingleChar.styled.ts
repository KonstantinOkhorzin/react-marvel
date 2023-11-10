import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 293px 550px;
  align-items: start;
  gap: 50px;
`;

export const Description = styled.p`
  margin-top: 25px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.body};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;
