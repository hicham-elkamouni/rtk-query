import './App.css';
import { AddPost } from './components/AddPost';
import { Post } from './components/Post';
import { usePostsQuery } from './services/postsApi'

function App() {
  const { data , error, isLoading, isFetching, isSuccess } = usePostsQuery();

  return (
    <div className="App">
      <h1>React Redux Toolkit RTK Query Tutorial</h1>
      <AddPost/>
      {isLoading && <p>Loading...</p>}
      {isFetching && <p>Fetching...</p>}
      {error && <p>something went wrong</p>}
      {isSuccess && 
      (<div>
        {
          data.map(post => {
          return  <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p><Post id={ post.id }/></p>
                  </div>
          })
        }

      </div>)
      }
    </div>
  );
}

export default App;
