import { useAddPostMutation, usePostsQuery } from '../services/postsApi'

export const AddPost = () => {

    const [addPost] = useAddPostMutation()
    const { refetch } = usePostsQuery()

    const post = {
        "userId": 333,
        "id": 44444,
        "title": "free fire",
        "body": "the best game ever"
    }

    const addHandler = async() => {
        await addPost(post)
        refetch();
    }

    return (
        <>
            <button onClick={ addHandler }>add post</button>
        </>
    )
}
