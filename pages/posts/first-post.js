import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/layout"

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`Chart.js loaded correctly!`)}
        ></Script>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Index page</a>
          </Link>
        </h2>
        <h3>
          <Link href="/posts/second-post">
            <a>Second Post page</a>
          </Link>
        </h3>
        <h4>
          <a href="https://nextjs.org/" target="_blank">
            Next.js website
          </a>
        </h4>
      </Layout>
    </>
  );
}
