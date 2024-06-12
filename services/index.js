import axios from "axios";

const fetchPosts = () => {
  const endpoint = 'https://api-eu-west-2.hygraph.com/v2/clwss8lq4024707w6bi76p10y/master';


    const query = `
    query {
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
       Authorization: `${process.env.NEXT_PUBLIC_GRAPH_ENDPOINT}`
    }
  });
  return response.data;
} catch(error) {
  console.error('Error fetching posts', error);
  return null;
}

};

export default fetchPosts;