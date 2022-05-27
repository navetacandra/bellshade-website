import { Fragment } from "react";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import dataJson from "@/data-json/java/basic/005_operator-komparasi.json";
import OrderedList from "@/components/List/OrderedList";
import TextStyle from "@/components/TextStyle";

export default function Page() {
  return (
    <Layout
      pageTitle="Bellshade | Java - Operator Komparasi"
      metaImage="/meta-image/java/basic/operator-komparasi.png"
    >
      <WrapperTemplate>
        <section className="my-5">
          <h2 className="title-2">Operator Komparasi/Perbandingan</h2>
          <p className="section_text">
            Operator dalam bahasa pemrograman berguna untuk memberi informasi
            kepada compiler atau intepreter untuk melakukan sebuah operasi
            matematika, kesamaan atau kelogisan yang akan menghasilkan sebuah
            keputusan.
          </p>
          <p className="section_text">
            Javascript sendiri memiliki banyak operator, mulai dari operator
            perbandingan, kelogisan, dan aritmatika.
          </p>
        </section>
        <section className="my-5">
          <h3 className="subtitle-h3">Java operator komparasis/perbandingan</h3>
          <p className="section_text">
            Banyak jenis operasi perbandingan. Macam-macamnya yaitu:
          </p>
          <OrderedList className="section_text">
            {dataJson.map((val, key) => (
              <Fragment key={key}>
                {[val.title].map((val1, key1) => (
                  <li key={key1}>
                    <p className="section_text">
                      <TextStyle Text={val1} />
                    </p>
                  </li>
                ))}
                <p className="section_text">{val.desc}</p>
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
