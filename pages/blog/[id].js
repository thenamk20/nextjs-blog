import Head from 'next/head'

function Blog({ post }) {
    return (
      <li>{post.id}, {post.body}</li>
    )
}
  
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    // paths: mang cac doi tuong co key la params
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await res.json()

    // Pass post data to the page via props
    return { props: { post } }
}

export default Blog
