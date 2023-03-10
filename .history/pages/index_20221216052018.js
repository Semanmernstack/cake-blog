import Head from 'next/head'
import Image from 'next/image'

import   {  gql, GraphQLClient } from 'graphql-request'
import Blogs from '../components/Blogs';


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
export async function getStaticProps() {
  const results = await graphcms.request(Query); 
  return {
    props: {
      results,
    },
    revalidate: 20,
  }

}

export default function Home({ results }) {
  console.log(results)
  return (
    <div className="bg-slate-200 h-screen">
      <Head>
        <title>Trizza blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-6xl mx-auto">
        {results.posts.map((result) => (
        <Blogs
          key={result.id}
          authorAvatar= {result.author.avatar.url}
          id = {result.id}
          authorName = {result.author.name}
          photo = {result.coverPhoto.url}
          date = {result.datePublishes}
          short = {result.little}
          slug = {result.slug}
          title = {result.title}
        />
        ))}
      </div>
      

      

      
    </div>
  )
}
