import Link from "next/link";
import Layout from "@/components/Template/Layout";
import OrderedList from "@/components/List/OrderedList";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import TextStyle from "@/components/TextStyle";
import dataJson from "@/data-json/javascript/000_home.json";

export default function Page() {
  return (
    <Layout pageTitle="Bellshade | Javascript">
      <WrapperTemplate>
        <section className="my-5">
          <h2 className="title-2">Apa itu Javascript?</h2>
          <p className="section_text">
            JavaScript adalah bahasa pemrograman yang digunakan dalam
            pengembangan website agar lebih dinamis dan interaktif. Jika
            sebelumnya kalian mungkin belajar HTML dan CSS maka dengan
            JavaScript kalian bisa membuat tampilan dari website kalian menjadi
            lebih interaktif lagi.
          </p>
        </section>
        <section className="my-5">
          <h2 className="title-2">Kenapa Javascript?</h2>
          <p className="section_text">
            Tentunya belajar JavaScript pada saat seperti ini merupakan pilihan
            yang tepat, dikarenakan JavaScript adalah bahasa yang ramah untuk
            pemula alias beginner-friendly yang pastinya akan membuat kalian
            dapat mempelajarinya dengan mudah. Oleh karena itu JavaScript
            menjadi bahasa paling populer berdasarkan survei yang dilakukan oleh
            Stackoverflow.
          </p>
          <div className="relative">
            <img
              src="/img/javascript-poll.png"
              alt="Javascript Poll"
              className="my-5 shadow-lg w-full mt-5"
            />
          </div>
        </section>
        <section className="my-5">
          <h2 className="title-2">Contoh Penggunaan Javascript</h2>
          <p className="section_text">
            Dengan JavaScript kita bisa membuat website yang jauh lebih baik
            pastinya. Seperti membuat navbar, slider, timer, hingga membuat
            sebuah game sekalipun yang dapat berjalan di browser, dan tentunya
            masih banyak lagi yang bisa dibuat dengan JavaScript.
          </p>
          <p className="section_text">
            Beberapa contoh sederhana penggunaan JavaScript:
          </p>
          <OrderedList className="section_text">
            {dataJson.penggunaan.map((val, key) => (
              <li
                style={{ fontSize: "1.125rem" }}
                className="section_text"
                key={key}
              >
                <a
                  href={val.url}
                  style={{ textDecoration: "none" }}
                  className="text-blue_primary font-normal"
                >
                  {val.nama}
                </a>
              </li>
            ))}
          </OrderedList>
        </section>
        <section className="my-5">
          <h2 className="title-2">Tahapan Belajar Javascript</h2>
          <hr />
          <h4 className="subtitle-h4">Jalur Belajar Javascript</h4>
          <p className="section_text">
            Jalur belajar ini diperuntukkan bagi kalian yang masih awam atau
            baru saja terjun di dunia pemrograman. Di sini kalian akan belajar
            dasar-dasar JavaScript mulai dari variabel hingga objek.
          </p>
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
                  {dataJson.alur_belajar.basic.map((val, key) => (
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
                              href={`/learn/javascript/basic/${val.id
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                            >
                              {val.topik}
                            </Link>
                          </p>
                        ) : (
                          <p className="text-slate-500 text-base">
                            {val.topik}
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
