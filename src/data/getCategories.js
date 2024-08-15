const PUBLIC_WORDPRESS_API_URL = import.meta.env.PUBLIC_WORDPRESS_API_URL;
const query = `
  {
    categories(where:{ exclude: [1] }) {
      nodes {
        name
        slug
        databaseId
      }
    }
  }
`;
async function getCategoriesList() {
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
  const categoriesDataFunc = await getCategoriesList();
  export const categoriesListData = categoriesDataFunc.data.categories.nodes;