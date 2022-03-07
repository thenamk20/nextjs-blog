import Head from 'next/head'
function BlogPost({ posts }) {
  return (
    <div>
      <Head>
        <title> My Site</title>
      </Head>
      {posts.map((post, index) => (
        <article key ={index}>
          <h1>{post.id}.{post.title}</h1>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

export default BlogPost