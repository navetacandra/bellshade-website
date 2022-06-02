import Link from "next/link";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import TextStyle from "@/components/TextStyle";
import dataJson from "@/data-json/cpp/000_home.json";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | C++ - Materi Pembelajaran C++ Bellshade'
      metaImage='/meta-image/learn/cpp.png'
    >
      <WrapperTemplate>
        <section className='my-5'>
          <div className='text-center mb-3'>
            <h1 className='title-1'>C++</h1>
          </div>
          <p className='section_text'>
            <TextStyle Text='C++ adalah bahasa pemograman multi fungsi dengan tipe #italic[compiled language]. Artinya, kode yang ditulis dalam C++ harus dikompilasi atau diubah terlebih dahulu menjadi file #mark_code[binary] yang dapat dimengerti komputer.' />
          </p>
          <p className='section_text'>
            <TextStyle Text='C++ dikembangkan dari predesesornya yaitu C dengan mengimplementasi paradigma #italic[Object Oriented Programming] (OOP). Karena didasarkan pada bahasa C, program yang ditulis dalam C++ dapat dijalankan dekat sekali dengan mesin tanpa perantara.' />
          </p>
          <p className='section_text'>
            <TextStyle Text='Efeknya, #italic[runtime] C++ dapat disandingkan dengan bahasa C yang notabene memiliki waktu #mark_code[runtime] yang tercepat diantara semua bahasa pemograman. Alhasil, C++ sering digunakan untuk implementasi perangkat lunak yang membutuhkan tenaga komputasi yang besar seperti #italic[Game Engine, Physics Simulations,] dan bahkan #italic[library] yang digunakan bahasa lain (e.g. Numpy, Scipy, dll)' />
          </p>
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
                          <p className='text-dark dark:text-slate-400 text-base'>
                            {`${val.topik} - On Progress`}
                          </p>
                        )}
                      </td>
                      <td className='px-6 py-4 text-base text-dark dark:text-slate-400'>
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
