import { getPostById, getFeaturedPosts } from "../../helpers/utils";
import PostTitle from "../../components/post-detail/PostTitle";
import PostContent from "../../components/post-detail/PostContent";

const PostPage = (props) => {
  const post = props.selectedPost;

  if (!post) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  };

  return (
    <div>
      <div>
        <PostTitle
          title={post.title}
          description={post.description}
          date={post.date}
        />
      </div>
      <PostContent body={post.body}></PostContent>
    </div>
  );
};

export const getStaticPaths = async () => {
  const posts = await getFeaturedPosts();

  const paths = posts.map((post) => ({ params: { postId: post.id } }));

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const postId = context.params.postId;
  const post = await getPostById(postId);

  return {
    props: {
      selectedPost: post,
    },
    revalidate: 30,
  };
};

export default PostPage;
