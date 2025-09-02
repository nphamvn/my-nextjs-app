export const revalidate = 0; // SSG, build-time

async function getFeaturedPosts() {
  return ['Post 1', 'Post 2', 'Post 3'];
}

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <div>
      <h2>Landing Page (SSG)</h2>
      <ul>
        {featuredPosts.map((post, i) => (
          <li key={i}>{post}</li>
        ))}
      </ul>
    </div>
  );
}
