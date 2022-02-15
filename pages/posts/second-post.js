import Link from "next/link"
import Layout from "../../components/layout"

export default function SecondPost() {
  return (
    <>
      <Layout>
        <h1>Second Post</h1>
        <h2>
          <Link href="/">
            <a>Index page</a>
          </Link>
        </h2>
        <h3>
          <Link href="/posts/first-post">
            <a className="foo" target="_blank">
              First Post page
            </a>
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
