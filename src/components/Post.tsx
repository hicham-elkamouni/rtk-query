import { usePostQuery } from '../services/postsApi'

export const Post = ({id} : { id : number}) => {
    const { data } = usePostQuery(id)
    return (
      <pre>{ JSON.stringify(data,["userId" , "id", "title"], 4)}</pre>
    )
  }
