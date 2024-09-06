import { useState } from 'react'
import Bloglist from './Bloglist'

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'blog 1',
      body: 'This is blog 1',
      snippet: 'hello my name is zihadul islam Tusher. and what is your name',
      id: 1,
    },
    {
      title: 'blog 2',
      body: 'This is blog 1',
      snippet: 'hello my name is zihadul islam Tusher. and what is your name',
      id: 2,
    },
    {
      title: 'blog 3',
      body: 'This is blog 1',
      snippet: 'hello my name is zihadul islam Tusher. and what is your name',
      id: 3,
    },
    {
      title: 'blog 4',
      body: 'This is blog 1',
      snippet: 'hello my name is zihadul islam Tusher. and what is your name',
      id: 4,
    },
  ])
  return (
    <div className="home flex flex-col  text-center">
      <Bloglist blogs={blogs} />
    </div>
  )
}

export default Home
