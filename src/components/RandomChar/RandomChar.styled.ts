import styled from '@emotion/styled';

import mjolnir from '../../assets/img/mjolnir.png';

export const Wrapper = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 250px;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.25);
`;

export const DynamicBlock = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
