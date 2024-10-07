import { useState } from 'react';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import { Typography, Button, TextField } from '@mui/material';
import { object, string } from 'yup';
import { Link } from 'react-router-dom';

import { StyledForm, FormError, SuccessResult, FailuresMessage } from './SearchForm.styled';
import LoadingButton from '../../../../../../components/LoadingButton';
import { useGetCharacterByIdOrNameQuery } from '../../../../../../redux/characters/api';
import { handleError } from '../../../../../../helpers';

interface Values {
  searchName: string;
}

const validationSchema = object({
  searchName: string().required('This field is required'),
});

const SearchForm = () => {
  const [searchName, setSearchName] = useState<string>('');
  const {
    data: searchChar,
    isFetching,
    error,
    isSuccess,
  } = useGetCharacterByIdOrNameQuery({ name: searchName }, { skip: searchName === '' });

  const onFormSubmit = (values: Values, actions: FormikHelpers<Values>) => {
    setSearchName(values.searchName);
    actions.resetForm();
  };

  return (
    <div>
      <Typography variant='h4' component='p'>
        Or find a character by name:
      </Typography>
      <Formik
        initialValues={{ searchName: '' }}
        onSubmit={onFormSubmit}
        validationSchema={validationSchema}
      >
        <StyledForm>
          <Field
            as={TextField}
            fullWidth
            type='search'
            name='searchName'
            placeholder='Enter name'
          />
          {isFetching ? (
            <LoadingButton />
          ) : (
            <Button type='submit' variant='contained'>
              find
            </Button>
          )}

          <ErrorMessage name='searchName' component={FormError} />
        </StyledForm>
      </Formik>

      {searchChar && (
        <SuccessResult>
          <p>There is! Visit {searchChar.name} page?</p>
          <Button
            component={Link}
            to={`/characters/${searchChar.id}`}
            variant='contained'
            color='secondary'
          >
            TO PAGE
          </Button>
        </SuccessResult>
      )}
      {!searchChar && isSuccess && !isFetching && (
        <FailuresMessage>
          The "{searchName.toLocaleUpperCase()}" was not found. Check the name and try again
        </FailuresMessage>
      )}
      {error && <FailuresMessage>{handleError(error)}</FailuresMessage>}
    </div>
  );
};

export default SearchForm;
