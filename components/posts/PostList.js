import { Fragment } from 'react';

import PostItem from './PostItem';
import classes from './PostList.module.css';

const PostList = ({ posts }) => {
  
  return (
    <Fragment>
        <ul className={classes.list_container}>
            {posts.map(post => (
                <PostItem 
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    description={post.description}
                    body={post.body}
                    date={post.date}
                    image={post.image}
                />
            ))};
        </ul>
    </Fragment>
  );
}

export default PostList