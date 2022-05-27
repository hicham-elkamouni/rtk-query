import './App.css';
import { usePostQuery, usePostsQuery } from './services/postsApi'

function App() {
  const { data , error, isLoading, isFetching, isSuccess } = usePostsQuery();

  return (
    <div className="App">
      <h1>React Redux Toolkit RTK Query Tutorial</h1>
      {isLoading && <p>Loading...</p>}
      {isFetching && <p>Fetching...</p>}
      {error && <p>something went wrong</p>}
      {isSuccess && 
      (<div>
        {
          data.map(post => {
          return  <div key={post.id}>
                    <h2>{post.title}</h2>
                    {/* <p><PostDetail id = { post.id }/></p> */}
                  </div>
          })
        }

      </div>)
      }
    </div>
  );
}

export const PostDetail = ({id} : { id : string}) => {
  const { data } = usePostQuery(id)
  return (
    <pre>{ JSON.stringify(data, undefined, 2)}</pre>
  )
}

export default App;
