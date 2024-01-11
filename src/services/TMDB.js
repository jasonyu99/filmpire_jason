// file where we make all the calls to the TMDB API and return the data to the components that need it.

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
});
