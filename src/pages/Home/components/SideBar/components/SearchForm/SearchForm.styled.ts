import styled from '@emotion/styled';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 38px;
  column-gap: 24px;
  row-gap: 10px;
`;

export const FormError = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  line-height: ${({ theme }) => theme.lineHeights.heading};
`;

export const SuccessResult = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  li {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;
    column-gap: 24px;
  }
  p {
    color: ${({ theme }) => theme.colors.success};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${({ theme }) => theme.fontWeights.heading};
    line-height: ${({ theme }) => theme.lineHeights.heading};
  }
  a {
    color: #fff;
  }
`;

export const FailuresMessage = styled.p`
  margin-top: 25px;
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  line-height: ${({ theme }) => theme.lineHeights.heading};
`;
