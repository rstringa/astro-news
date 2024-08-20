// En tu componente Astro
import { useEffect, useState } from 'react';

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://bake250.isdeveloping.com/gentlecan/wp-json/wp/v2/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
        </div>
      ))}
    </div>
  );
}