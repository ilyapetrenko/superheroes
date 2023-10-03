import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const heroApi = createApi({
  reducerPath: 'hero/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/'
  }),
  endpoints: build => ({
    searchChars: build.query({
      query: () => `heroes`
    }),
    deleteHero: build.mutation({
      query: (id) => ({
        url: `heroes/${id}`,
        method: 'DELETE'
      }),
    }),
    getHeroById: build.query({
      query: (id) => `heroes/${id}`,
    }),
    updateHero: build.mutation({
      query: (updatedHero) => ({
        url: `heroes/`,
        method: 'PUT',
        body: updatedHero,
      }),
    }),
    createHero: build.mutation({
      query: (newHero) => ({
        url: 'heroes',
        method: 'POST',
        body: newHero,
      }),
    }),
  })
})

export const {
  useSearchCharsQuery,
  useDeleteHeroMutation,
  useGetHeroByIdQuery,
  useUpdateHeroMutation,
  useCreateHeroMutation
} = heroApi
