import { useState, useEffect } from 'react';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import { Typography, Button, TextField } from '@mui/material';
import { object, string } from 'yup';
import { Link } from 'react-router-dom';

import { StyledForm, FormError, SuccessResult, FailuresMessage } from './SearchForm.styled';
import marvelService from '../../../../../../services/marvel';
import { ICharacter } from '../../../../../../types';
import LoadingButton from '../../../../../../components/LoadingButton';

interface Values {
  searchName: string;
}

const validationSchema = object({
  searchName: string().required('This field is required'),
});

const SearchForm = () => {
  const [searchName, setSearchName] = useState<string>('');
  const [searchCharList, setSearchCharList] = useState<ICharacter[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onFormSubmit = (values: Values, actions: FormikHelpers<Values>) => {
    setSearchName(values.searchName);
    actions.resetForm();
  };

  useEffect(() => {
    if (searchName === '') return;

    setLoading(true);
    marvelService
      .getCharacterByName(searchName)
      .then(CharList => {
        setSearchCharList(CharList);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [searchName]);

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
          {loading ? (
            <LoadingButton />
          ) : (
            <Button type='submit' variant='contained'>
              find
            </Button>
          )}

          <ErrorMessage name='searchName' component={FormError} />
        </StyledForm>
      </Formik>

      {searchCharList && searchCharList.length > 0 && (
        <SuccessResult>
          {searchCharList.map(({ name, id }) => (
            <li key={id}>
              <p>There is! Visit {name} page?</p>
              <Button
                component={Link}
                to={`/characters/${id}`}
                variant='contained'
                color='secondary'
              >
                TO PAGE
              </Button>
            </li>
          ))}
        </SuccessResult>
      )}
      {searchCharList && searchCharList.length === 0 && (
        <FailuresMessage>The character was not found. Check the name and try again</FailuresMessage>
      )}
      {error && <FailuresMessage>{error}</FailuresMessage>}
    </div>
  );
};

export default SearchForm;
