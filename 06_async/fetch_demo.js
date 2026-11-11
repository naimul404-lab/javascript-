async function loadPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const post = await response.json();
    console.log(post.title);
  } catch (error) {
    console.error("Could not load post:", error.message);
  }
}

loadPost();
