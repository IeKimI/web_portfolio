import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import "tailwindcss/tailwind.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className="sticky bg-white	top-10 w-2/3 h-14 pl-0 pr-0 shadow-[0px_10px_15px_-3px_rgba(60,60,60,0.5)] rounded-full mt-10">
        <ul className="items-center flex justify-between my-4 px-10">
          <li class="nav-item active">
            <a href="/">Home</a>
          </li>
          <li class="nav-item font-bold">
            <a href="/posts/about">About</a>
          </li>
          <li class="nav-item">
            <a href="/projects">Projects</a>
          </li>
          <li class="nav-item">
            <a href="/articles">Articles</a>
          </li>
          <li class="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      <Head>
        <title>Eri Kim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="flex flex-wrap justify-center pt-24">
        <div class="w-4/12 sm:w-4/12 px-10">
          <img
            src="/images/profile.jpg"
            alt="..."
            class="shadow rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
      </div>
      <h1 className="text-5xl font-bold pt-10">Eri Kim</h1>

      <main>
        <h2>
          Read <Link href="/posts/first-post">this page!</Link>
        </h2>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
          <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
          <p className="text-gray-500 text-lg">
            React and Tailwind CSS in action
          </p>
        </div>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
