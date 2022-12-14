import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a developer at House of Glamour</p>
        <p>
          (This is a sample website - you will be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      ></section>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            {title} <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
