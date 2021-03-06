
export async function getAllPosts() {
    const response = await fetch(process.env.FIREBASE_URI);
    const data = await response.json();

    const posts = [];

    for (const key in data) {
        posts.push({
            id: key,
            ...data[key],
        });
    };
    
    return posts;
}


export async function getFeaturedPosts() {
    const posts = await getAllPosts();
    return posts.filter((post) => post.isFeatured);
}

export async function getPostById(id) {
    const allPosts = await getAllPosts();
    return allPosts.find((post) => post.id === id);
}

export async function getFilteredPosts(dateFilter) {
    const { year, month } = dateFilter;

    const allPosts = await getAllPosts();
  
    let filteredPosts = allPosts.filter((post) => {
      const postDate = new Date(post.date);
      return postDate.getFullYear() === year && postDate.getMonth() === month - 1;
    });
  
    return filteredPosts;
}