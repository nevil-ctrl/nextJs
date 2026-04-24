const getPosts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(["post1", "post2", "post3"]);
  }, 1000);
});

async function loadPosts() {
  const data = await getPosts;

  console.log(data);

  return data;
}
