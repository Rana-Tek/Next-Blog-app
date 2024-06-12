import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const fetchPosts = async() => {
  const endpoint = 'https://api-eu-west-2.hygraph.com/v2/clwss8lq4024707w6bi76p10y/master';


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
  const response = await axios.post(endpoint,{
    query: query
  }, {
    headers:{
      'authorization': ` token ${process.env.AUTH_TOKEN }`,
    }
  });
  return response.data;
} catch(error) {
  console.error('Error fetching posts', error);
  return null;
}

};

export default fetchPosts;