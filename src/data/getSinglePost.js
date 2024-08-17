
  const PUBLIC_WORDPRESS_API_URL = import.meta.env.PUBLIC_WORDPRESS_API_URL;
  const {slug} = Astro.params;

  const query = `{
        postBy(slug:"${slug}") {
          postId
     title
    content
    categories {
      nodes {
        name
        slug
      }
    }
    featuredImage {
          node {
            srcSet
          }
        }
  }
    }
            `;

            async function getSinglePost() {
              const res = await fetch(`${PUBLIC_WORDPRESS_API_URL}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
              });
              const data = await res.json();
              return data;
            }
            const singlePostData = await getSinglePost();
            export const singlePost = singlePostData.data;
