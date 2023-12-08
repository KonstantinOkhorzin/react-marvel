import styled from '@emotion/styled';

export const InnerMainWrapper = styled.main`
  position: relative;
  display: grid;
  align-items: start;
  grid-template-columns: 650px 425px;
  grid-template-rows: 250px;
  column-gap: 25px;
  row-gap: 50px;
`;

export const Decoration = styled.img`
  position: absolute;
  right: -174px;
  bottom: -70px;
  z-index: -1;
`;
