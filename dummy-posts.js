const DUMMY_POSTS = [
    {
        id: 1,
        title: "Are you a WebDev?",
        description: "All about being a web dev",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: '2021-12-01',
        image: "images/are-you-a-web-dev.jpg",
        isFeatured: true,
    },
    {
        id: 2,
        title: "Why are you a developer?",
        description: "Reasons for getting into development",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "2021-12-06",
        image: "images/why-are-you-a-developer.jpg",
        isFeatured: true,
    },
    {
        id: 3,
        title: "Being True to Your Code",
        description: "How to write code that relects your personality",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "2022-01-04",
        image: "images/being-true-to-your-code.jpg",
        isFeatured: false,
    },
    {
        id: 4,
        title: "Is Nextjs That good?",
        description: "Why you should be using Nextjs, 'cos it's great!",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "2022-03-08",
        image: "images/is-nextjs-that-good.jpg",
        isFeatured: true,
    },
    {
        id: 5,
        title: "Bumbling Through...",
        description: "When you hit a wall, do these things",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "2022-04-16",
        image: "images/bumbling-through.jpg",
        isFeatured: false,
    },
];

export function getFeaturedPosts() {
    return DUMMY_POSTS.filter((post) => post.isFeatured);
  }
  
  export function getAllPosts() {
    return DUMMY_POSTS;
  }
  
  export function getFilteredPosts(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_POSTS.filter((post) => {
      const postDate = new Date(post.date);
      return postDate.getFullYear() === year && postDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getPostById(id) {
    return DUMMY_POSTS.find((post) => post.id === id);
  }