import './App.css';
import useUpdateLogger from './hooks/useUpdateLogger';
import useCounter from './hooks/useCounter';
import useFetch from './hooks/useFetch';

function App() {

  const [moji, setMoji] = useUpdateLogger('');
  const [count, add, minus] = useCounter(0);
  const [posts, isPending, error] = useFetch('https://jsonplaceholder.typicode.com/posts');
  

  return (
    <>
      <div className='val'>
        Each value: <input
          value={moji}
          onChange={e => setMoji(e.target.value)}
        />
        <br />

        <p>{count}</p>

        <button
          className='button'
          onClick={add}
        >
          +
        </button>

        <button
          className='button'
          onClick={minus}
        >
          -
        </button>

        <hr />
      </div>


      <div className="jsonDatas">
        { error && <div>{error}</div>}
        {isPending && <h1 style={{textAlign:'center'}}>Loading ... </h1>}
        {posts && posts.map(post => <div className='posts'>
          <span>{post.id}-</span>{post.title}
          <hr />
        </div>)}
      </div>


    </>

  )
}

export default App
