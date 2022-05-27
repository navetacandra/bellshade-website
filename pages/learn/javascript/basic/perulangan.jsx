import { Fragment } from "react";
import OrderedList from "@/components/List/OrderedList";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import TextStyle from "@/components/TextStyle";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import dataJson from "@/data-json/javascript/basic/006_perulangan.json";

export default function Page() {
  return (
    <Layout
      pageTitle="Bellshade | Javascript - Perulangan"
      metaImage="/meta-image/learn/javascript/basic/perulangan.png"
    >
      <WrapperTemplate>
        <section className="my-5">
          <h2 className="title-2">Pengulangan (Looping)</h2>
          <p className="section_text">
            Looping dalam bahasa pemrograman manapun itu melakukan tugas yang
            berulang berdasarkan kondisi yang diberikan.
          </p>
          <h4 className="subtitle-h4">Jenis-Jenis Looping</h4>
          <p className="section_text">
            Dalam JavaScript terdapat beberapa fungsi looping, diantaranya:
          </p>

          <OrderedList>
            {dataJson.loop_type.map((val, key) => (
              <Fragment key={key}>
                <li className="section_text">
                  <TextStyle Text={val.title} />
                </li>
                <p className="section_text">
                  <TextStyle Text={val.desc} />
                </p>
                <SyntaxHighlighter code={dataJson[val.id].draft} />
                <p className="section_text">Contoh:</p>
                <SyntaxHighlighter code={dataJson[val.id].code} />
              </Fragment>
            ))}{" "}
          </OrderedList>
        </section>
        <section className="my-5">
          <h3 className="subtitle-h3">Keyword Spesial dalam Looping</h3>
          <OrderedList>
            {dataJson.special_keyword.map((val, key) => (
              <Fragment key={key}>
                <li className="section_text">
                  <TextStyle Text={val.title} />
                </li>
                {val.desc.map((val1, key1) => (
                  <p className="section_text" key={key1}>
                    <TextStyle Text={val1} />
                  </p>
                ))}
                <p className="section_text">Contoh:</p>
                <SyntaxHighlighter code={val.code} />
              </Fragment>
            ))}
          </OrderedList>
        </section>
      </WrapperTemplate>
    </Layout>
  );
}
