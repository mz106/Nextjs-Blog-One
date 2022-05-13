import { getFeaturedPosts } from "../dummy-posts";


import PostList from '../components/posts/PostList';

const HomePage = () => {
  const featuredPosts = getFeaturedPosts();
  
  return (
    <div>
        <PostList posts={featuredPosts}/>
    </div>
  )
}

export default HomePage