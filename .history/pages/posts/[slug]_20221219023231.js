


import { data } from 'autoprefixer';
import   {  gql, GraphQLClient } from 'graphql-request'



const graphcms = new GraphQLClient(
  "https://api-us-east-1.hygraph.com/v2/clbovm8rw0pel01t6bac9do5n/master"
);
const Query = gql`
query Post($slug: String!) {
    post(where: {slug: $slug}) {
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
 
}

`

export async function getStaticPaths() {
  const sluggy = gql`  
    {
      posts {
        slug
      }
    }
  `
  
  const data = await graphcms.request(sluggy);
  
  return{
    paths: data.posts.map((post) => ({params: {slug: post.slug}})),
    fallback: false,
  };
}






function Blog() {
  
  return (
    <div>
      <p>hi</p>

    </div>
  )
}

export default Blog