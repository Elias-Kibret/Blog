import {request,gql} from "graphql-request"
const graphqlAPI=process.env.ENDPOINT
export const getPost=async ()=>{
    const query=gql`
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
  
    `
    const result=await request(graphqlAPI,query)
    return result.postsConnection.edges;
}