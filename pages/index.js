import Head from 'next/head'
import Layout, { SITE_TITLE } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Antunes. I'm a Tech Solutions Intern at GRI Club and a computer scientist student. You can contact me on <a href="https://www.linkedin.com/in/antunes18/" target="_blank">LinkedIn</a>.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}