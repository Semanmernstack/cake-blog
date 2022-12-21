import React from 'react'
import   {  gql, GraphQLClient } from 'graphql-request'


const graphcms = new GraphQLClient(
  "https://api-us-east-1.hygraph.com/v2/clbovm8rw0pel01t6bac9do5n/master"
);
const Query = gql`
query  {
  posts {
    createdAt,
    
    datePublishes,
    id,
    little,
    content{
      html
    },
    publishedAt,
    slug,
    title,
    updatedAt,
    coverPhoto{
      url
    },
    author {
      name,
      avatar{
        url
      }
    }
  }
}

`

function Blog({ results}) {
  console.log(results)
  return (
    <div>Blog</div>
  )
}

export default Blog


export async function getStaticProps() {
  const results = await graphcms.request(Query); 
  return {
    props: {
      results,
    },
    revalidate: 20,
  }

}




  
  


