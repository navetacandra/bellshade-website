import Link from "next/link";
import Layout from "@/components/Template/Layout";
import JavascriptSVG from "@/components/svg-image/JavascriptSVG";
import JavaSVG from "@/components/svg-image/JavaSVG";

export default function Page() {
  return (
    <Layout pageTitle="Bellshade | Learn">
      <div className="container mx-auto">
        <section className="my-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/learn/javascript">
            <div className="inline-flex gap-4 p-4 shadow-md bg-white dark:bg-slate-800 rounded-md transition-all hover:shadow-lg dark:hover:bg-slate-700 ease-out duration-300 cursor-pointer">
              <div>
                <JavascriptSVG />
              </div>
              <div>
                <h3 className="font-Semibold text-3xl line-clamp-1 my-1 dark:text-slate-50">
                  Tutorial Dasar Javascript
                </h3>
                <p className="text-sm line-clamp-2 text-slate-700 dark:text-slate-300">
                  Pelajari dasar-dasar pemrograman Javascript untuk membuat
                  website yang interaktif.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/learn/java">
            <div className="inline-flex gap-4 p-4 shadow-md bg-white dark:bg-slate-800 rounded-md transition-all hover:shadow-lg dark:hover:bg-slate-700 ease-out duration-300 cursor-pointer">
              <div>
                <JavaSVG />
              </div>
              <div>
                <h3 className="font-Semibold text-3xl line-clamp-1 my-1 dark:text-slate-50">
                  Tutorial Dasar Java
                </h3>
                <p className="text-sm line-clamp-2 text-slate-700 dark:text-slate-300">
                  Pelajari dasar-dasar pemrograman Java dari nol.
                </p>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </Layout>
  );
}
