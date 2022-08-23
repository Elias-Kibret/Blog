import { GraphQLClient,gql } from "graphql-request";
const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphCMSToken=process.env.GRAPHCMS_TOKEN
export default async function comments(req,res){
  const qraphQLClient=new GraphQLClient(graphqlAPI,{
    headers:{
      authorization:`Bearer ${graphCMSToken}`
    }
  })

  const query=gql`
       mutation CreateComment ($name: String!, $email:String!, $comment:String!, $slug:String!){
        createComment(data:{name:$name, email:$email,comment:$comment, post{
          connect:{slug:$slug}
        }}) {id}
       }
  `
  try {
    
    const result=await GraphQLClient.request(query,req.body)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
  }
}