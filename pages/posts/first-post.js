import Link from "next/link";

export default function FirstPost() {
  return (
    <>
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
    </>
  );
}
