import Link from "next/link";
import Layout from "@/components/Template/Layout";
import UnorderedList from "@/components/List/UnorderedList";
import TextStyle from "@/components/TextStyle";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import dataJson from "@/data-json/java/000_home.json";

function Page() {
  return (
    <Layout pageTitle="Bellshade | Java">
      <WrapperTemplate>
        <section className="my-5">
          <h2 className="title-2">Apa itu Java?</h2>
          <p className="section_text">
            Java adalah bahasa pemrograman multifungsi dengan tipe{" "}
            <i>compiled language</i>. Artinya, kode yang ditulis dalam Java
            harus dikompilasi atau diubah terlebih dahulu menjadi{" "}
            <i>file binary</i> yang dapat dimengerti oleh komputer.
          </p>
          <p className="section_text">
            Java merupakan bahasa pemrograman yang lebih sederhana dan dapat
            mengakomodasikan hampir seluruh fitur penting dari bahasa
            pemrograman lain.
          </p>
        </section>
        <section className="my-5">
          <h2 className="title-2">Sejarah Singkat Java</h2>
          <p className="section_text">
            Pada tahun 1991, Sun Microsystems menawarkan proyek kepada tim yang
            dipimpin oleh James Gosling, Patrick Naughton, dan Mike Sheridan
            untuk membuat perangkat konsumer seperti <i>cable TV box</i>.
            Dikarenakan perangkat tersebut tidak mempunyai banyak memori, bahasa
            yang digunakan harus berukuran kecil dan sesuai dengan
            arsitekturnya. Sehingga mereka memutuskan untuk membuat bahasa baru.
            Mereka menamakan proyek tersebut dengan nama{" "}
            <strong>Green Project</strong>.
          </p>
          <p className="section_text">
            Pada tahun 1994, terbentuklah sebuah nama untuk bahasa pemrograman
            yang mereka buat. Bahasa tersebut bernama OAK. Namun, ternyata nama
            OAK sudah ada pihak yang menggunakannya. Sehingga, nama OAK diubah
            menjadi Java. Nama Java terinspirasi dari secangkir kopi yang
            diminum berasal dari pulau Jawa, Indonesia. Akhirnya dibuatlah
            bahasa pemrograman Java dengan logo secangkir kopi. Setelah itu nama
            Java mulai terdengar, sehingga berbagai industri dan universitas pun
            banyak yang meliriknya.
          </p>
        </section>
        <section className="my-5">
          <h2 className="title-2">Kelebihan Java</h2>
          <UnorderedList className="section_text">
            <li className="my-2">
              <span className="font-semibold">Cross-platform</span>. Kelebihan
              utama dari Java adalah dapat dijalankan di berbagai platform. Di
              sistem operasi mana pun tetap bisa menjalankan program Java tanpa
              terkecuali.
            </li>
            <li className="my-2">
              <span className="font-semibold">
                OOP (Object-Oriented Programming)
              </span>
              , yang dimana semua aspek Java ini berbasis objek. Java merupakan
              salah satu bahasa pemrograman berbasis objek secara murni. Semua
              tipe data diturunkan dari kelas dasar yang disebut <i>object</i>.
              Hal ini sangat memudahkan <i>developer</i> untuk mendesain,
              membuat, mengembangkan, dan mengalokasi kesalahan sebuah program
              dengan basis Java secara cepat, tepat, mudah, dan terorganisir.
            </li>
            <li className="my-2">
              <span className="font-semibold">
                Memiliki package/library yang lengkap
              </span>
              . Java memiliki <i>library</i> yang lengkap sehingga sangat
              memudahkan <i>developer</i> untuk membangun aplikasinya.
            </li>
            <li className="my-2">
              <span className="font-semibold">Bergaya C++</span>. Java memiliki
              sintaks seperti bahasa pemrograman C++, sehingga menarik banyak{" "}
              <i>developer</i> C++ untuk pindah ke Java.
            </li>
            <li className="my-2">
              <span className="font-semibold">Garbage Collection</span>.{" "}
              <i>Garbage Collection</i> (pengumpulan sampah otomatis), memiliki
              fasilitas pengaturan penggunaan memori secara otomatis{" "}
              <i>sehingga developer</i> tidak perlu melakukan pengaturan memori
              secara langsung seperti halnya dalam bahasa C++ yang dipakai
              secara luas.
            </li>
          </UnorderedList>
        </section>
        <section className="my-5">
          <h2 className="title-2">Alur Belajar</h2>
          <p className="section_text">
            Untuk mempelajari bahasa pemrograman Java dengan maksimal, kalian
            perlu belajar pemrograman dasar dahulu. Silakan ikuti alur belajar
            berikut untuk mempelajari dasar-dasar pemrograman Java.
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
          <div className="note-text my-5">
            <p>
              Nb: Pastikan sesuai dengan alur belajarnya ya. Ingat,
              &quot;buru-buru tidak perlu, proses nomor satu&quot; 😁 🤙
            </p>
          </div>
        </section>
        <section className="my-5">
          <p className="section_text">
            Setelah menyelesaikan seluruh rangkaian pengenalan dasar
            pemrograman, kalian dapat mulai untuk mempelajari materi lain yang
            jauh lebih seru!
          </p>
          <p className="section_text">
            Mulailah belajar konsep dan pemrograman Java dengan dasar-dasar
            <a
              href="/java/intermediate/object_oriented_programming/basic"
              className="text-blue_primary"
            >
              <i> Object-Oriented Programming</i>
            </a>
            .
          </p>
          <p className="section_text">
            Apabila kalian telah mempelajari tingkat
            <a
              href="/java/intermediate/object_oriented_programming/basic"
              className="text-blue_primary"
            >
              <i> dasar Object-Oriented Programming</i>
            </a>{" "}
            (Pemrograman Berorientasi Objek), maka selanjutnya kalian bisa
            mempelajari tingkat
            <a
              href="/java/intermediate/object_oriented_programming/intermediate"
              className="text-blue_primary"
            >
              {" "}
              lanjutan
            </a>
            .
          </p>
        </section>
      </WrapperTemplate>
    </Layout>
  );
}

export default Page;
