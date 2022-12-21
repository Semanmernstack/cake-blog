import React from 'react'
import   {  gql, GraphQLClient } from 'graphql-request'


const graphcms = new GraphQLClient(
  "https://api-us-east-1.hygraph.com/v2/clbovm8rw0pel01t6bac9do5n/master"
)
const Query = gql`
  query Posts {
    posts {
      createdAt
      
      datePublishes 
      id
      little
      content{
        html
      }
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
    }
  }

`

function Blog({ post}) {
  console.log(post)
  return (
    <div>Blog</div>
  )
}

export default Blog


export async function getStaticProps() {
  const post = await graphcms.request(Query); 
  return {
    props: {
      post,
    },
    revalidate: 20,
  }

}




  
  


