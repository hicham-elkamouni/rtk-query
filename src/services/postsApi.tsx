import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Post } from "../models/post.model"

const postsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl : "https://jsonplaceholder.typicode.com"
    }),
    endpoints : (builder) => ({
        posts : builder.query<Post[], void>({
            query : () => '/posts'
        })
})

})

export const { usePostsQuery } = postsApi