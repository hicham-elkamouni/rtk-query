import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Post } from "../models/post.model"

export const postsApi = createApi({
    reducerPath : "postsApi",
    baseQuery: fetchBaseQuery({
        baseUrl : "https://jsonplaceholder.typicode.com"
    }),
    endpoints : (builder) => ({
        posts : builder.query<Post[], void>({
            query : () => '/posts',
        }),
        post : builder.query<Post, number>({
            query : (id) => `/posts/${id}`,
        }),
        addPost : builder.mutation<void, Post>({
            query : (post) => ({
                url : '/posts',
                method : 'POST',
                body : post,
            }),
        }),
        updatePost : builder.mutation<void, Post>({
            query : ({ id, ...rest}) => ({
                url : `/posts/${id}`,
                method : 'PUT',
                body : rest,
            }),
        }),
        deletePost : builder.mutation<void, number>({
            query : (id) => ({
                url : `/posts/${id}`,
                method : 'DELETE',
        }),
    })

})

export const { usePostsQuery, usePostQuery } = postsApi