import styled from '@emotion/styled';

import mjolnir from '../../assets/img/mjolnir.png';

export const Wrapper = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.25);
`;

export const DynamicBlock = styled.div`
  padding: 35px 35px 35px 40px;
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 30px;
  align-items: start;
  img {
    height: 180px;
    object-fit: cover;
  }
`;

export const Description = styled.p`
  margin-top: 10px;
  height: 90px;
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

export const StaticBlock = styled.div`
  padding: 35px 40px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.background};
  background-image: url(${mjolnir});
  background-repeat: no-repeat;
  background-size: 203px 189px;
  background-position: bottom 14px right -37px;
`;
