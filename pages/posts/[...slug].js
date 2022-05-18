
import { getFilteredPosts } from "../../helpers/utils";
import PostList from "../../components/posts/PostList";

import ErrorAlert from "../../components/ui/ErrorAlert";

const FilteredResultsPage = (props) => {
  const { posts } = props;
  
  if (!posts || posts.length === 0) {
    return <ErrorAlert>No posts found for your inputed year/month</ErrorAlert>;
  }

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const filteredPosts = await getFilteredPosts({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      posts: filteredPosts,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
};

export default FilteredResultsPage;
