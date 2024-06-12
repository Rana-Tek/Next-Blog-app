import axios from "axios";

const fetchPosts = () => {
  const endpoint = NEXT_PUBLIC_GRAPH_ENDPOINT;


    const query = `
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
      
    `;

try {
  const response = axios.post(endpoint,{
    query: query
  }, {
    headers:{
      'Authorization': ` Bearer ${process.env.AUTH_TOKEN }`,
    }
  });
  return response.data;
} catch(error) {
  console.error('Error fetching posts', error);
  return null;
}

};

export default fetchPosts;