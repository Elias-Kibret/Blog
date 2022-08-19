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

export const getRecentPosts= async()=>{
      const query=gql`
         query GetPostDeatils () {
           posts(
            orderBy:createdAt_ASC
            last:3
            ){
              title
              featuredImage {
                url
              }
              createdAt
              slug
            }
           
         }
      `
      const result=await request(graphqlAPI,query)
      return result.posts
        }


        export const getSimilarPosts=async()=>{
          const query=gql`
            query GetPostDetails($slug:String!, $categories:[String!]){
              posts(
                where:{slug_not: $slug, AND {categories_some:{slug_in:$categories}}}
                last:3
              ){
                title
                featuredImage {
                  url
                }
                createdAt
                slug
              }
            }
          `
          const result=await request(graphqlAPI,query)
          return result.posts
        }