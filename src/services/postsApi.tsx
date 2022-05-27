import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Post } from "../models/post.model"

export const postsApi = createApi({
    reducerPath : "postsApi",
    baseQuery: fetchBaseQuery({
        baseUrl : "https://jsonplaceholder.typicode.com"
    }),
    tagTypes :['Post'],
    endpoints : (builder) => ({
        posts : builder.query<Post[], void>({
            query : () => '/posts',
            providesTags : ['Post']
        }),
        post : builder.query<Post, number>({
            query : (id) => `/posts/${id}`,
            providesTags : ['Post']
        }),
        addPost : builder.mutation<void, Post>({
            query : (post) => ({
                url : '/posts',
                method : 'POST',
                body : post,
            }),
            invalidatesTags : ['Post']
        }),
        updatePost : builder.mutation<void, Post>({
            query : ({ id, ...rest}) => ({
                url : `/posts/${id}`,
                method : 'PUT',
                body : rest,
            }),
            invalidatesTags : ['Post']
        }),
        deletePost : builder.mutation<void, number>({
            query : (id) => ({
                url : `/posts/${id}`,
                method : 'DELETE',
            }),
            invalidatesTags : ['Post']
        }),

    }),
})

export const { usePostsQuery, usePostQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation } = postsApi