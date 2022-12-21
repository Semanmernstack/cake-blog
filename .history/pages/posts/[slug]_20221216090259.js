import Image from 'next/image'

import   {  gql, GraphQLClient } from 'graphql-request'



const graphcms = new GraphQLClient(
  "https://api-us-east-1.hygraph.com/v2/clbovm8rw0pel01t6bac9do5n/master"
);
const Query = gql`
query Post($slug: String!) {
    post(where: {slug: $slug}) {
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
 
}

`
const sluggy = `gql
    {
       posts {
            slug
        }
    }
`
export async function getStaticPaths() {
    const results = await graphcms.request(sluggy);
    return{
        paths: results.map((post) => ({params: {slug: post.slug}})),
    }
}
export async function getStaticProps({ params }) {
    const sluggy = params.sluggy
  const results = await graphcms.request(Query, {sluggy}); 
  const postd = data.results
  return {
    props: {
      postd,
    },
    revalidate: 20,
  }

}

import React from 'react'

import React from 'react'

function Blog({ postd }) {
  return (
    <div>
        <p>{postd.short}</p>

    </div>
  )
}

export default Blog