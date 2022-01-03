import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchPosts } from './reduxStore/posts/actions/fetch_posts';
import PostsList from './PostsList';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div className="App">
      <h1>Redux Powered Blog</h1>
      <PostsList />
    </div>
  );
}

export default App;
