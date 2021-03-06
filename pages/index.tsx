import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Template/Layout";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade - Belajar Dasar Pemrograman dengan Dokumentasi Berbahasa Indonesia'
      metaImage='/meta-image/home.png'
    >
      <section id='home-header' className='max-h-max overflow-y-hidden'>
        <div
          className='flex flex-row mx-auto'
          style={{ width: "90%", height: "650px" }}
        >
          <div className='my-auto'>
            <h1 className='grow text-4xl font-medium text-dark dark:text-white'>
              Funky Study Coding with{" "}
              <span className='text-blue-gray dark:text-blue-600 font-bold'>
                Bellshade
              </span>
            </h1>
            <p className='my-5 text-dark dark:text-white'>
              Belajar materi tentang coding, quiz, dan juga bisa belajar bareng
              di komunitas Web Programming UNPAS
            </p>
            <button
              type='button'
              className='text-white py-3 px-7 bg-blue-gray hover:bg-github_btn-hv dark:bg-blue-700 dark:hover:bg-blue-600 rounded-2xl'
            >
              <Link href='/learn'>Get Started</Link>
            </button>
          </div>
          <div className='ml-10 hidden lg:block'>
            <Image
              src='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/img/home-header.png'
              alt='Home-Header-Image'
              width='724px'
              height='623px'
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
