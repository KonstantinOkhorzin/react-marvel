import styled from '@emotion/styled';
import errorImg from '../../../assets/img/error.gif';

const Error = styled.div`
  width: 100%;
  height: 100%;
`;

const ErrorView = () => {
  return (
    <Error>
      <img src={errorImg} alt='error' />
    </Error>
  );
};

export default ErrorView;
