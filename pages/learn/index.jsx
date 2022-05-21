import Link from "next/link";
import Layout from "@/components/Template/Layout";
import dataJson from "@/data-json/learn.json";

export default function Page() {
  return (
    <Layout pageTitle="Bellshade | Learn">
      <div className="container mx-auto mb-10">
        <section className="my-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {dataJson.map((data, i) => (
            <Link href={data.link} key={`${i}-${data.id}`}>
              <div className="inline-flex gap-4 p-4 shadow-md bg-white dark:bg-slate-800 rounded-md transition-all hover:shadow-lg dark:hover:bg-slate-700 ease-out duration-300 cursor-pointer">
                <div className="shrink-0 h-16 w-16 md:h-32 md:w-32 my-auto">
                  <picture className="inline-block w-full h-full">
                    <img src={data.img} alt={`${data.lang}'s Icon`} />
                  </picture>
                </div>
                <div className="my-auto">
                  <h3 className="font-Semibold text-3xl line-clamp-1 dark:text-slate-50">
                    Tutorial {data.lang}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </Layout>
  );
}
