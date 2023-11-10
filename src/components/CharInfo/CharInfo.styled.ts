import styled from '@emotion/styled';

export const Header = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  column-gap: 25px;
  img {
    height: 150px;
    object-fit: cover;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

export const Description = styled.p`
  margin-top: 15px;
  font-size: 14px;
  line-height: 1.3;
`;

export const ComicsList = styled.ul`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ComicsItem = styled.li`
  width: 100%;
  padding: 0px 10px;
  font-size: 14px;
  line-height: 1.2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
