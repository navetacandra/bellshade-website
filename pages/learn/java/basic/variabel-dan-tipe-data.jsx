import { Fragment } from "react";
import UnorderedList from "@/components/List/UnorderedList";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import TextStyle from "@/components/TextStyle";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import dataJson from "@/data-json/java/basic/002_tipe-data.json";

export default function Page() {
  return (
    <Layout
      pageTitle="Bellshade | Java - Variabel dan Tipe Data"
      metaImage="/meta-image/java/basic/variabel-dan-tipe-data.png"
    >
      <WrapperTemplate>
        <section className="my-5">
          <h2 className="title-2">Tipe Data</h2>
          <p className="section_text">
            <i>Tipe data</i> adalah value dengan jenis tertentu yang sangat
            berguna mempermudah dalam melakukan operasi dll sehigga tidak
            terjadi kesalahan kalkulasi, operasi, dan hasil
          </p>
          <div className="container mx-auto px-auto">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-base text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-6 py-3">#</th>
                    <th className="px-6 py-3">Tipe Data</th>
                    <th className="px-6 py-3">Size</th>
                    <th className="px-6 py-3">Panjang Value</th>
                  </tr>
                </thead>
                <tbody className="section_text">
                  {dataJson.data_type_table.map((val, key) => (
                    <tr
                      key={key}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 section_text"
                    >
                      <td className="px-6 py-4 text-gray-900 dark:text-white whitespace-nowrap font-semibold text-base">
                        0{key + 1}
                      </td>
                      <td className="px-6 py-4">
                        <TextStyle Text={val.type} />
                      </td>
                      <td className="px-6 py-4">
                        <TextStyle Text={val.size} />
                      </td>
                      <td className="px-6 py-4 text-base">{val.long_value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="my-5">
          <UnorderedList>
            {dataJson.data_type_list.map((data, i) => (
              <Fragment key={i}>
                {/* eslint-disable-next-line */}
                {!!data.type ? (
                  <li className="section_text">
                    <TextStyle Text={data.type} />
                  </li>
                ) : null}
                {/* eslint-disable-next-line */}
                {!!data.desc ? (
                  <p className="section_text">
                    <TextStyle Text={data.desc} />
                  </p>
                ) : null}
                {data.code && !!data.code.length ? (
                  <SyntaxHighlighter code={data.code} />
                ) : null}
              </Fragment>
            ))}
          </UnorderedList>
        </section>
      </WrapperTemplate>
    </Layout>
  );
}
