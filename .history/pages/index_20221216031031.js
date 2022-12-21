import Head from 'next/head'
import Image from 'next/image'

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
export async function getStaticProps() {
  const results = await graphcms.request(Query); 
  return {
    props: {
      results,
    },
    revalidate: 20,
  }

}

export default function Home() {
  return (
    <div className="bg-slate-200 h-screen">
      <Head>
        <title>Trizza blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      

      
    </div>
  )
}
