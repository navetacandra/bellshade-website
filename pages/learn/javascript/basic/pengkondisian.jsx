import { Fragment } from "react";
import OrderedList from "@/components/List/OrderedList";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import TextStyle from "@/components/TextStyle";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import dataJson from "@/data-json/javascript/basic/007_pengkondisian.json";

export default function Page() {
  return (
    <Layout
      pageTitle="Bellshade | Javascript - Pengkondisian"
      metaImage="/meta-image/javascript/basic/pengkondisian.png"
    >
      <WrapperTemplate>
        <section className="my-5">
          <h2 className="title-2">Pengkondisian</h2>
          <p className="section_text">
            Kegunaan dari pengkondisian adalah memberi tau program blok kode
            mana {"yang "} bisa dieksekusi/dijalankan. Dalam javascript terdapat
            tiga {"macam "}
            pengkondisian, yaitu:
          </p>
          <OrderedList>
            {dataJson.map((val, key) => (
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
