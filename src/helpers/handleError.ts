import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

const handleError = (error: FetchBaseQueryError | SerializedError): string => {
  if ('status' in error) {
    return 'error' in error ? error.error : JSON.stringify(error.data); //FetchBaseQueryError
  } else {
    return error.message ?? 'An unexpected error occurred'; //SerializedError
  }
};

export default handleError;
