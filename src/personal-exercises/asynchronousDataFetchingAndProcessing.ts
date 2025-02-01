const dataSourceUrl = "https://jsonplaceholder.typicode.com/posts";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// I can't use await outside of a function because
// This module file is not 'es2022', 'esnext', 'system', 'node16', 'nodenext', or 'preserve', and the 'target' option is set to 'es2017'
(async () => {
  // TODO - Relocate the fetch request in a reusable function with proper type
  // Fetch data
  const postsPromise = await fetch(dataSourceUrl);
  const postsJson = (await postsPromise.json()) as Post[];

  // Filter data
  const filterId = 1; // This should be dynamic?
  const filteredPosts = postsJson.filter((thePostItem) => {
    return thePostItem.userId === filterId;
  });

  // Transform data
  const constructedPosts = filteredPosts.map((thePostItem) => {
    return {
      title: thePostItem.title,
      body: thePostItem.body.slice(0, 20),
    };
  });

  // Display data
  console.log("constructedPosts", constructedPosts);
})();

export default {};
