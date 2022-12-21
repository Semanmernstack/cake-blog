import React from 'react'
import  request, {  gql, GraphQLClient } from 'graphql-request'

function Blog({ posts}) {  
  console.log(posts)
  
  const graphcms = new GraphQLClient(
  "https://api-us-east-1.hygraph.com/v2/clbovm8rw0pel01t6bac9do5n/master"
  )
  const Query = gql`
  {
    posts {
      createdAt
      datePublishes
      id
      little,
      publishedAt
      slug
      title
      updatedAt
      coverPhoto{
        url
      }
      author {
        name
        avatar{
          url
        }
      }
      content{
        html
      }
    }
  }
  
  `
  return (
    <div>
        <p>home</p>
    </div>
  )
  } 

export default Blog
export async function getStaticProps(){
  const posts = await graphcms.request(Query);
  return {
    props: {
      posts,
    },

  }

}