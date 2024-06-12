 import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const fetchPosts = async() => {

  const endpoint ='https://api-eu-west-2.hygraph.com/v2/clwss8lq4024707w6bi76p10y/master';
  


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
      'authorization': `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTgxODg1NTIsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2x3c3M4bHE0MDI0NzA3dzZiaTc2cDEweS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiZDE1YjIxZDEtZTM1Yy00YzczLThjOGMtNDA0ZTVmY2ViYWU5IiwianRpIjoiY2x4YnAzbnFoM2thNTA4bW44YWZ1MzNlOCJ9.Me6TTagbPQWVaCtIyMgRindC_PAiT1F4EaldN0tjz-hFQVEBUxtYB54ZmyqxcuDiIiAxqVDqvj6G92Ddbf7NeVe-3ntQJ8CihejwMsEP2OTRv1tc8vjVw2VVsPvingXc00aT6Kq-0Rx1EyXUn8wfdk-dYk9z8GHLZX2oBxo0IuuQ1QCvpRmfY27erqt5mR5CBonYKcL7VDC_lQjiLGjfs1aR8CUuEzTHhhoVs18m2VsqUwXapHTu4fRmAKXidEEINf9Z9CKpPZ23N-YRSY-MgV4qr0DfvgiXDwNtmMK7903n2OhYinOt7Z6r_qtsVUZC9onzCgmb8RkZL62H-XSX7LW5XbWtFDJLD9auxd3_03angTG7rTdi3rwgvYbYENi9Q2s3Knzf32x6sBA2GP-XCYq16h5cV5OoiXZtRxm1aUEHUP2D8YxVTd7y2aVwa8x-p5NTTCRYLHmbeG5lGX4TwA7iM7swdT4X8KOPpdP_WWl-lhsG3t5E7_g_zEYIdGY7CO2E-gewIrpsyB9m9zzJa1OqA9sTbRcfrrbyWyEGUgysk1Pwv0CaNeSQG28AjImt4zyMexMOac6GGK-sw4vjZyTTQUieXQLlpYwGRrD5Dox9pvevXtvLtcicsfQLUD92tuG6FzDT4dZCvsITJ3bt1qlb8AR0aZR9JiKG7GrN1gI`,
    }
  });
  return response.data;
} catch(error) {
  console.error('Error fetching posts', error);
  return null;
}

};

export default fetchPosts;

