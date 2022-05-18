import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllPosts } from "../../helpers/utils";

import PostSearch from "../../components/posts/PostSearch";
import PostList from "../../components/posts/PostList";

const AllPosts = (props) => {
  const router = useRouter();
  const { posts } = props;
  
    const findPostsHandler = (year, month) => {
        const fullPath = `posts/${year}/${month}`;
        router.push(fullPath);
    };

  return (
    <Fragment>
      <PostSearch onSearch={findPostsHandler} />
      <PostList posts={posts} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPosts;
