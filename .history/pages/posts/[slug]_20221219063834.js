
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
    <div className=" flex flex-col bg-blue-400 shadow-2xl bottom-1 items-center text-center justify-center max-w-4xl mx-auto md:max-w-5xl lg:max-w-7xl p-2">
      <div className="mt-3">
        <p className="font-bold text-xl mb-2 underline">{posts.post.title}</p>
        <img className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] items-center object-cover mx-auto" src={posts.post.coverPhoto.url} alt="pics" />
        <p className="mt-2 text-left" dangerouslySetInnerHTML={{__html: posts.post.content.html}}></p>
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