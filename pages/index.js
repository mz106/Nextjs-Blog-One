import { getFeaturedPosts } from "../helpers/utils";

import PostList from "../components/posts/PostList";

const HomePage = (props) => {
  return (
    <div>
      <PostList posts={props.posts} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredPosts = await getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
};

export default HomePage;
