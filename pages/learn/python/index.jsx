import Link from "next/link";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import UnorderedList from "@/components/List/UnorderedList";
import TextStyle from "@/components/TextStyle";
import dataJson from "@/data-json/python/000_home.json";

export default function Page() {
  return (
    <Layout pageTitle="Bellshade | Python">
      <WrapperTemplate>
        <section className="mx-auto text-center my-8">
          <h1 className="title-1">🎉🎉 Selamat Datang di Python 🎉🎉</h1>
        </section>
        <section className="my-5">
          <p className="section_text">
            Python dibuat dan dikembangkan oleh Guido Van Rossum, programmer
            yang berasal dari Belanda. Pemilihan nama python itu sendiri diambil
            dari sebuah acara televisi yang lumayan terkenal yang bernama Moth
            Python Flying Circus yang merupakan acara sirkus favorit dari Guido.
          </p>
          <p className="section_text">
            Python adalah bahasa pemrograman multi paradigma, pemrogramaan
            berorientasi objek dan permograman terstruktur juga didukung penuh,
            dan banyak fiturnya mendukung pemrograman fungsional.
          </p>
        </section>
        <section className="my-5">
          <p className="section_text">Kelebihan diatara python antara lain</p>
          <UnorderedList className="section_text">
            <li>Mudah digunakan untuk menulis di perangkat lunak terbaru</li>
            <li>Mudah untuk diajarkan</li>
            <li>
              Mendukung{" "}
              <span className="font-bold">IoT (Internet of Things)</span>
            </li>
            <li>Mudah dipahami</li>
            <li>
              Serta mudah didapatkan, karena mudah diinstal, python juga
              termasuk <span className="font-bold">multiplatform</span>
            </li>
          </UnorderedList>
        </section>
        <section className="my-5">
          <UnorderedList className="section_text">
            <p className="section_text">
              Contoh implementasi dari bahasa pemrograman python adalah
            </p>
            <li>Komputasi ilmiah dan numerik contohnya seperti scipy</li>
            <li>Aplikasi bisnis seperti tryton</li>
            <li>Pembuatan game seperti battlefield 2</li>
            <li>Pengembangan web seperti django atau flask (library)</li>
            <li>
              Pengembangan dari situs web dan layanan sperti dropbox, buzfeed
              dan uber
            </li>
          </UnorderedList>
        </section>
        <section className="my-5">
          <div className="container mx-auto px-auto">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-base text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-6 py-3">#</th>
                    <th className="px-6 py-3">Topik</th>
                    <th className="px-6 py-3">Target Pembelajaran</th>
                  </tr>
                </thead>
                <tbody>
                  {dataJson.alur_belajar.map((val, key) => (
                    <tr
                      key={key}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="font-semibold text-base px-6 py-4 text-gray-900 dark:text-white whitespace-nowrap">
                        {val.langkah}
                      </td>
                      <td className="px-6 py-4">
                        {val.status === "done" && val.id ? (
                          <p className="text-blue_primary text-base">
                            <Link
                              href={`/learn/java/basic/${val.id
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                            >
                              {val.topik}
                            </Link>
                          </p>
                        ) : (
                          <p className="text-slate-500 text-base">
                            {`${val.topik} - On Progress`}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 text-base">
                        <TextStyle Text={val.target_pembelajaran} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </WrapperTemplate>
    </Layout>
  );
}
