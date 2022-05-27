import { useAddPostMutation, useDeletePostMutation, useUpdatePostMutation } from '../services/postsApi'

export const AddPost = () => {

    const [addPost] = useAddPostMutation()
    const [updatePost] = useUpdatePostMutation()
    const [deletePost] = useDeletePostMutation()

    const post = {
        "userId": 333,
        "id": 3,
        "title": "old test",
        "body": "testtttt"
    }
    const postUpdated = {
        "userId": 333,
        "id": 3,
        "title": "test updated",
        "body": "testtt 2"
    }

    const addHandler = async() => {
        await addPost(post)
        console.log(post)
    }
    const updateHandler = async() => {
        await updatePost(postUpdated)
        console.log(postUpdated)
    }
    const deleteHandler = async() => {
        await deletePost(post.id)
    }

    return (
        <>
            <button onClick={ addHandler }>add post</button>
            <button onClick={ updateHandler }>update post</button>
            <button onClick={ deleteHandler }>delete post</button>
        </>
    )
}
