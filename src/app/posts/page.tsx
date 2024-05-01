async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default async function PostsPage() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>
          <h3>
            {post.id}. {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
