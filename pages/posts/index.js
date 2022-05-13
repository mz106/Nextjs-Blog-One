
import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllPosts } from "../../dummy-posts";

import PostSearch from "../../components/posts/PostSearch";
import PostList from "../../components/posts/PostList";


const AllPosts = () => {
  const router = useRouter();

  const allPosts = getAllPosts();

  const findPostsHandler = (year, month) => {
      const fullPath = `posts/${year}/${month}`
      router.push(fullPath);
  };
  
  return (
      <Fragment>
          <PostSearch onSearch={findPostsHandler}/>
          <PostList posts={allPosts} />
      </Fragment>
  )
}

export default AllPosts