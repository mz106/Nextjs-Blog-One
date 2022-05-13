import { useRouter } from 'next/router';
import { getFilteredPosts } from '../../dummy-posts';
import PostList from '../../components/posts/PostList';

import ErrorAlert from '../../components/ui/ErrorAlert';

const FilteredResultsPage = () => {
    const router = useRouter();
    const filterData = router.query.slug;
    
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    const posts = getFilteredPosts({
        year: numYear,
        month: numMonth,
    });

    if(!posts || posts.length === 0) {
        return (
            <ErrorAlert>No posts found for you inputed year/month</ErrorAlert>
        );
    }

  return (
    <div>
        <PostList posts={posts} />
    </div>
  )
}

export default FilteredResultsPage