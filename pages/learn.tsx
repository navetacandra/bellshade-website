import Link from "next/link";
import Layout from "@/components/Template/Layout";
import dataJson from "@/data-json/learn.json";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | Learn - Mulai Perjalanan Belajar Dasar Pemrograman'
      pageDescription='Mari mulai perjalanan belajar dasar-dasar pemrograman di Bellshade dengan dokumentasi berbahasa Indonesia.'
      metaImage='/meta-image/learn.png'
    >
      <div className='container mx-auto mb-10'>
        <section className='my-5 grid grid-cols-1 md:grid-cols-2 gap-4'>
          {dataJson.map((data, i) => (
            <Link href={data.link} key={`${i}-${data.id}`}>
              <div className='inline-flex gap-4 p-4 shadow-md bg-white dark:bg-slate-800 rounded-md transition-all hover:shadow-lg dark:hover:bg-slate-700 ease-out duration-300 cursor-pointer'>
                <div className='shrink-0 h-16 w-16 md:h-20 md:w-20 my-auto'>
                  <picture className='inline-block w-full h-full'>
                    <img
                      src={`https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public${data.img}`}
                      alt={`${data.lang}'s Icon`}
                    />
                  </picture>
                </div>
                <div className='ml-2 mt-2'>
                  <h1 className='font-Semibold text-3xl line-clamp-1 dark:text-slate-50'>
                    Belajar {data.lang}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </Layout>
  );
}
