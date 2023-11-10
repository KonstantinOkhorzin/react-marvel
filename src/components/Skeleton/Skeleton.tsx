import { Box, Skeleton as MuiSkeleton, Typography } from '@mui/material';

const Skeleton = () => {
  return (
    <>
      <Typography variant='h4' component='h3' align='center'>
        Please select a character to see information
      </Typography>
      <Box mt='30px' sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <MuiSkeleton variant='circular' width={40} height={40} />
          <MuiSkeleton variant='rectangular' width='326px' height='16px' />
        </Box>
        <MuiSkeleton variant='rectangular' width='100% ' height='35px' />
        <MuiSkeleton variant='rectangular' width='100% ' height='35px' />
        <MuiSkeleton variant='rectangular' width='100% ' height='35px' />
      </Box>
    </>
  );
};

export default Skeleton;
