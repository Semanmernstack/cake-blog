import Head from 'next/head'
import Image from 'next/image'

import   {  gql, GraphQLClient } from 'graphql-request'
import Blogs from '../components/Blogs';
import Header from '../components/Header';


const graphcms = new GraphQLClient(
  "https://api-us-east-1.hygraph.com/v2/clbovm8rw0pel01t6bac9do5n/master"
);
const Query = gql`
query  {
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
export async function getStaticProps() {
  const posts = await graphcms.request(Query); 
  return {
    props: {
      posts: posts.posts
    },
    revalidate: 20,
  }

}

export default function Home({ posts }) {
  
  return (
    <div className="  ">
      <Head>
        <title>Trizza blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <p className="flex items-center justify-center font-serif mt-5 p-2 mb-2 text-xl lg:2xl font-semibold shadow-2xl"> Best Cakes around the World</p>
      <div className="max-w-4xl mx-auto p-4  ">
        {posts?.map((post) => (
        <Blogs
          key={post.id}
          post = {post.post}
          authorAvatar= {post.author.avatar.url}
          id = {post.id}
          authorName = {post.author.name}
          photo = {post.coverPhoto.url}
          date = {post.datePublishes}
          short = {post.little}
          slug = {post.slug} 
          title = {post.title}
        />
        ))}
      </div>
      

      

      
    </div>
  )
}