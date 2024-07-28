import { Button, CircularProgress } from '@mui/material';

const LoadingButton = () => {
  return (
    <Button variant='contained' disabled>
      <CircularProgress color='inherit' size={25} />
    </Button>
  );
};

export default LoadingButton;
