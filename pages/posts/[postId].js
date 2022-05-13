import { useRouter } from 'next/router';
import { Fragment } from 'react';

import { getPostById, getAllPosts } from '../../dummy-posts';
import PostTitle from '../../components/post-detail/PostTitle';
import PostContent from '../../components/post-detail/PostContent';

const PostPage = () => {
  const router = useRouter();
  const postId = parseInt(router.query.postId);
  
  const post = getPostById(postId);

  return (
    <div>
        <div>
            <PostTitle 
                title={post.title} 
                description={post.description}
                date={post.date}
            />
        </div>
            <PostContent body={post.body} ></PostContent>
    </div>
  );
};

export default PostPage;
