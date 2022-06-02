import Link from "next/link";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import TextStyle from "@/components/TextStyle";
import dataJson from "@/data-json/sql/000_home.json";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";

export default function Page() {
  return (
    <Layout pageTitle='Bellshade | SQL' metaImage='/meta-image/learn/sql.png'>
      <WrapperTemplate>
        <section className='my-5'>
          <div className='text-center mb-3'>
            <h1 className='title-1'>SQL</h1>
          </div>
          <h1 className='title-2'>Pengertian SQL</h1>
          <p className='section_text'>
            <Link href='https://id.wikipedia.org/wiki/SQL'>
              <i className='text-blue_primary cursor-pointer'>
                Structured Query Language
              </i>
            </Link>{" "}
            (SQL) adalah bahasa yang digunakan untuk mengakses/memanipulasi data
            pada <i>Relational Database Management System</i> (RDBMS). Contoh
            RDBMS yang populer saat ini yaitu MySQL, PostgreSQL, Microsoft SQL
            Server, dan Oracle.
          </p>
          <p className='section_text'>
            <TextStyle Text='Sintaks SQL tidak bersifat #italic[case sensitive]. Jadi antara #mark_code[insert] sama saja dengan #mark_code[INSERT]. Tetapi sebagian #italic[programmer] suka menggunakan #mark_code[UPPERCASE] dalam menulis sintaks SQL.' />
          </p>
          <p className='section_text'>Contoh:</p>
          <SyntaxHighlighter
            code={[
              '#m[INSERT INTO ] #_[tabel_kelas (nama, kelas) ] #m[VALUES ] #_[(] #g["Angga"] #_[, ] #o[3] #_[);]',
            ]}
          />
        </section>
        <section className='my-5'>
          <div className='container mx-auto px-auto'>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-base text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-slate-200'>
                  <tr>
                    <th className='px-6 py-3'>#</th>
                    <th className='px-6 py-3'>Topik</th>
                    <th className='px-6 py-3'>Target Pembelajaran</th>
                  </tr>
                </thead>
                <tbody>
                  {dataJson.alur_belajar.map((val, key) => (
                    <tr
                      key={key}
                      className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                    >
                      <td className='font-semibold text-base px-6 py-4 text-gray-900 dark:text-white whitespace-nowrap'>
                        {val.langkah}
                      </td>
                      <td className='px-6 py-4'>
                        {val.status === "done" && val.id ? (
                          <p className='text-blue_primary text-base'>
                            <Link
                              href={`/learn/java/basic/${val.id
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                            >
                              {val.topik}
                            </Link>
                          </p>
                        ) : (
                          <p className='text-slate-400 text-base'>
                            {`${val.topik} - On Progress`}
                          </p>
                        )}
                      </td>
                      <td className='px-6 py-4 text-base text-slate-400'>
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
