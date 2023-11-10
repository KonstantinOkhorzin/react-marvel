import { Typography } from '@mui/material';
import { Wrapper} from './AppBanner.styled';

const AppBanner = () => {
  return (
    <Wrapper>
      <Typography variant='h2' component='p'>
        New comics every week!
        <br />
        Stay tuned!
      </Typography>
    </Wrapper>
  );
};

export default AppBanner;
