import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
      </Head>

      <blockquote className='text-2xl font-semibold italic text-center text-slate-900'>
        When you look
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span class="relative text-white"> annoyed </span>
        </span>
        all the time, people think that you're busy.
      </blockquote>

      <section className="">
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small >
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}
