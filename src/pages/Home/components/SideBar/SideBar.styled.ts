import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: sticky;
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  grid-area: s;
`;

export const BlockWrapper = styled.div`
  padding: 25px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.background};
`;
