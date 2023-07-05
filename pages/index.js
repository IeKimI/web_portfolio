import Head from "next/head";
import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="sticky bg-white top-10 w-2/3 h-14 pl-0 pr-0 shadow-[0px_10px_15px_-3px_rgba(60,60,60,0.5)] rounded-full mt-10">
        <ul className="items-center flex justify-between my-4 px-10">
          <li class="nav-item active font-bold">
            <a href="/">Home</a>
          </li>
          <li class="nav-item">
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
      <div className="flex mx-60 itmes-center justify-between mt-24">
        <div className="flex items-start flex-col">
          <h1 className="flex items-start text-5xl font-bold pt-10">Eri Kim</h1>
          <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-3xl text-black">
            Software Engineer | Data Scientist
          </h2>
          <p className="mt-4 text-1xl">
            I am a software engineer II and data scientist with expertise in
            full-stack development. <br></br> I enjoy solving complex problems
            and learning new skills. I am passionate about creating high-quality
            code that follows best practices and industry standards. I am always
            looking for new challenges and opportunities to grow as a developer.
          </p>
        </div>
        <div className="flex items-center ">
          <img
            src="/images/home.png"
            alt="..."
            class="max-w-full h-auto align-middle border-none"
          />
        </div>
      </div>

      <footer className="fixed bottom-10">
        <hr className="w-full" />
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Eri Kim
        </a>
      </footer>
    </div>
  );
}
