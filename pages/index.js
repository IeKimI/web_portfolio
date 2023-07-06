import Head from "next/head";
import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="sticky bg-white top-20 w-2/3 h-14 pl-0 pr-0 shadow-[0px_10px_15px_-3px_rgba(60,60,60,0.5)] rounded-full mt-10">
        <ul className="items-center flex justify-between my-4 px-16">
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
      <div className="flex mx-60 itmes-center justify-between my-24 grow">
        <div className="flex items-start flex-col">
          <h1 className="flex items-start text-5xl font-bold pt-10">Eri Kim</h1>
          <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-3xl text-black">
            Software Engineer | Data Scientist
          </h2>
          <p className="mt-4 text-1xl">
            I am a software engineer II and data scientist with expertise in
            full-stack development. <br /> I enjoy solving complex problems and
            learning new skills. I am passionate about creating high-quality
            code that follows best practices and industry standards. I am always
            looking for new challenges and opportunities to grow as a developer.
          </p>

          <div class="grid grid-cols-3 mt-5">
            <svg
              class="h-12 w-12 mr-3 text-white"
              viewBox="0 0 24 24"
              fill="black"
              stroke="currentColor"
              stroke-width="0"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <a href="https://github.com/IeKimI" target="_blank">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </a>
            </svg>
            <svg
              class="h-12 w-12 mr-3 text-white"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              stroke-width="0"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <a
                href="https://www.linkedin.com/in/eri-kim-8181341b5/"
                target="_blank"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                <rect x="2" y="9" width="4" height="12" />{" "}
                <circle cx="4" cy="4" r="2" />
              </a>
            </svg>
            <svg
              class="h-12 w-12 mr-3 text-white"
              viewBox="0 0 24 24"
              fill="black"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <a href="mailto:erikim0413@gmail.com" target="_blank">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                <polyline points="22,6 12,13 2,6" />
              </a>
            </svg>
          </div>

          {/* <div class="grid grid-cols-2">
            <a
              class="relative bg-yellow-200 p-8 hover:shadow-xl m- -rotate-6 mt-10 cursor-pointer hover:scale-105"
              href="/posts/projects"
            >
              <div class="relative">
                <h2 class="text-xl font-bold mb-4">Internships</h2>
                <p class="text-gray-700">Akamai & Intralinks</p>
              </div>
            </a>
            <a
              class="relative bg-yellow-200 p-8 hover:shadow-xl ml-5 rotate-3 mt-10 cursor-pointer hover:scale-105"
              href="/posts/projects"
            >
              <div class="relative">
                <h2 class="text-xl font-bold mb-4">Sleep App</h2>
                <p class="text-gray-700">WPI GQP</p>
              </div>
            </a>
            <a
              class="relative bg-yellow-200 p-8 hover:shadow-xl ml-5 rotate-3 mt-10 cursor-pointer hover:scale-105"
              href="/posts/projects"
            >
              <div class="relative">
                <h2 class="text-xl font-bold mb-4">AI Othello</h2>
                <p class="text-gray-700">WPI AI Course</p>
              </div>
            </a>
            <a
              class="relative bg-yellow-200 p-8 hover:shadow-xl ml-5 -rotate-2 mt-10 cursor-pointer hover:scale-105"
              href="/posts/projects"
            >
              <div class="relative">
                <h2 class="text-xl font-bold mb-4">AWS Website</h2>
                <p class="text-gray-700">WPI Software Engineering Course</p>
              </div>
            </a>
            <a
              class="relative bg-yellow-200 p-8 hover:shadow-xl ml-5 rotate-3 mt-10 cursor-pointer hover:scale-105"
              href="/posts/projects"
            >
              <div class="relative">
                <h2 class="text-xl font-bold mb-4">Sleep App</h2>
                <p class="text-gray-700">WPI GQP</p>
              </div>
            </a>
          </div> */}
          <a href="/images/resume.pdf" download>
            <button class="bg-white hover:bg-gray-700 hover:text-white text-black font-bold py-2 px-4 rounded-full shadow-lg mt-5">
              Download Resume
            </button>
          </a>
        </div>
        <div className="flex items-center justify-end w-full">
          <img
            src="/images/profile.jpg"
            alt="..."
            class="align-middle rounded-full justify-end"
          />
        </div>
      </div>

      <footer className="sticky bottom-0">
        <hr />
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10"
        >
          Created by Eri Kim
        </a>
      </footer>
    </div>
  );
}
