import { Typography, Button, TextField } from '@mui/material';

import { Form } from './SearchForm.styled';

const SearchForm = () => {
  return (
    <>
      <Typography variant='h4' component='p'>
        Or find a character by name:
      </Typography>
      <Form>
        <TextField fullWidth type='search' placeholder='Enter name'/>
        <Button type='submit' variant='contained'>find</Button>
      </Form>
    </>
  );
};

export default SearchForm;
