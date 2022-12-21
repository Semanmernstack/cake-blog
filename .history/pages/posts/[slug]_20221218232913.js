


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
const sluggy = gql`  
    {
      results.posts {
        slug
      }
    }
`
export async function getStaticPaths() {
  
  const result = await graphcms.request(sluggy);
  
  return{
    paths: result.posts.map((post) => ({params: {slug: post.slug}})),
    fallback: false,
  };
}




function Blog() {
  
  return (
    <div>
      <p>{post.short}</p>

    </div>
  )
}

export default Blog