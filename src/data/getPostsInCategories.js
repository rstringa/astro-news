export async function getPostsInCategories(categorySlug) {
    const PUBLIC_WORDPRESS_API_URL = import.meta.env.PUBLIC_WORDPRESS_API_URL;
  
    const query = `
      {
        posts(first: 15, where: { categoryName: "${categorySlug}" }) {
          nodes {
            title
            slug
            categories {
              nodes {
                databaseId
                slug
                name
              }
            }
            featuredImage {
              node {
                sourceUrl(size: MEDIUM)
              }
            }
          }
        }
        categories(where: { slug: "${categorySlug}" }) {
          edges {
            node {
              name
            }
          }
        }
      }
    `;
  
    const res = await fetch(`${PUBLIC_WORDPRESS_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
  
    return await res.json();
  }