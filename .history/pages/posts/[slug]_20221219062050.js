
import   {  gql, GraphQLClient } from 'graphql-request'



const graphcms = new GraphQLClient(
  "https://api-us-east-1.hygraph.com/v2/clbovm8rw0pel01t6bac9do5n/master"
);
const Query = gql`
  query ($slug: String!) {
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

`

export async function getStaticPaths() {
  const sluggy = gql`  
    {
      posts {
        slug
      }
    }
  `
  
  const posts = await graphcms.request(sluggy);
  
  
  return{
    paths: posts?.posts?.map((post) => ({params: {slug: post.slug}})),
    
    fallback: false,
    
  };
}
export async function getStaticProps({ params }) {
  const slug = params.slug
  const posts = await graphcms.request(Query, {slug}); 
  return {
    props: {
      posts,
    }
  }
 
}


function Blog({ posts }) {
  
  return (
    <div className=" flex flex-col items-center text-center justify-center">
      <div>
        <p>{posts.post.title}</p>
        <img className="w-[400px] h-[400px] items-center object-cover mx-auto" src={posts.post.coverPhoto.url} alt="pics" />
        <p dangerouslySetInnerHTML={{__html: posts.post.content.html}}></p>
      </div>
      <div>
        <img className="w-14 h-14 rounded-full" src={posts.post.author.avatar.url} alt="avatar" />
        <p>{posts.post.author.name}</p>
        <p>{posts.post.datePublishes}</p>
      </div>


    </div>
  )
}

export default Blog