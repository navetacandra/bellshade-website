import Link from "next/link";
import Layout from "@/components/Template/Layout";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | 404 - Halaman Yang Kamu Cari Tidak Ditemukan'
      metaImage='/meta-image/home.png'
    >
      <div className='container mx-auto'>
        <div className='flex flex-warp'>
          <div className='self-center w-full px-5 bg-white dark:bg-slate-900 dark:text-white my-10'>
            <section className='my-5 text-center'>
              <h1 className='block text-9xl my-5 text-slate-500 dark:text-slate-300'>
                404
              </h1>
              <h2 className='text-4xl text-slate-500 dark:text-slate-300'>
                Page Not Found!
              </h2>
              <Link href='/'>
                <a className='underline text-sky-500 dark:text-sky-600 text-2xl mt-2 block'>
                  Go to the front page →
                </a>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
