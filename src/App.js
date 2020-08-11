import React, { useState, useEffect } from 'react';
import './App.css';

import Post from './components/Post'
import Search from './components/Search'

import { ArticlesList } from './components/elements/Elements'

const App = () => {

  const [posts, setPosts] = useState();
  const [term, setTerm] = useState('');



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
      .catch(err => console.log(err));
  }, []);



  let postsLayout = <div>Loading...</div>

  if (posts) {
    let filterByTerm = posts.filter(post => {
      return post.title.toLowerCase().includes(term.toLowerCase());
    })

    postsLayout = <ArticlesList>
      {filterByTerm.map(post => (
        <Post key={post.id}
          post={post} />
      ))}
    </ArticlesList>
  }



  return (
    <div className="App">
      <Search
        searchText={(text) => setTerm(text)} />
      <div>{postsLayout}</div>

    </div>
  );
}

export default App;
