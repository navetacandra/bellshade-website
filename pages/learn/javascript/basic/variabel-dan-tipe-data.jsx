import OrderedList from "@/components/List/OrderedList";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import TextStyle from "@/components/TextStyle";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import dataJson from "@/data-json/javascript/basic/002_data-type.json";

export default function Page() {
  return (
    <Layout
      pageTitle="Bellshade | Javascript - Variabel dan Tipe Data"
      metaImage="/meta-image/javascript/basic/variabel-dan-tipe-data.png"
    >
      <WrapperTemplate>
        <section className="my-5">
          <h2 className="title-2">Variabel dan Tipe Data</h2>
          {dataJson["text-1"].map((val, key) => (
            <p className="section_text" key={key}>
              {val}
            </p>
          ))}{" "}
          <h4 className="subtitle-h3">Jenis-Jenis Mendeklarasikan Variabel</h4>
          <p className="section_text">
            Dalam bahasa pemrograman JavaScript sendiri memiliki 3 cara
            mendeklarasikan sebuah variabel, yaitu
          </p>
          <OrderedList>
            {dataJson["varibel-type"].map((val, key) => (
              <li key={key} className="section_text">
                <code className="mark-text">{val.type}</code> {val.desc}
              </li>
            ))}
          </OrderedList>
          <p className="section_text">Contoh:</p>
          <SyntaxHighlighter code={dataJson["variabel-declare-code"]} />
          <h4 className="subtitle-h3">Jenis-Jenis Tipe Data</h4>
          <p className="section_text">
            Untuk tipe data, JavaScript memiliki banyak tipe data, kali ini
            membahas 3 tipe data dasar yang sering digunakan, yaitu:
          </p>
          <OrderedList>
            {dataJson["data-type"].map((val, key) => (
              <div key={key} className="ml-4">
                <li className="section_text">
                  <code className="mark-text">{val.type}</code>
                </li>
                {val.desc.map((val1, key1) => (
                  <p className="section_text" key={key1}>
                    <TextStyle Text={val1} />
                  </p>
                ))}
              </div>
            ))}
          </OrderedList>
          <SyntaxHighlighter code={dataJson["data-type-code"]} />
          <div className="note-text my-3">
            <p>
              Truthy : nilai yang dianggap benar ketika ditemui dalam konteks
              Boolean.
              <br />
              Falsy : nilai yang dianggap salah ketika ditemui dalam konteks
              Boolean.
            </p>
          </div>
          <h4 className="my-3">typeOf</h4>
          <p className="section_text">
            <i>typeOf</i> adalah salah satu jenis operator java script yang
            dapat digunakan untuk mengecek/melihat tipe data dari sebuah
            variabel.
          </p>
          <p className="section_text">
            contoh dari penggunaan <i>typeOf</i> adalah:
          </p>
          <SyntaxHighlighter code={dataJson["typeof-code"]} />
          <img
            className="my-3 shadow-lg rounded-lg border-b"
            src={`https://res.cloudinary.com/demo/image/fetch/https://camo.githubusercontent.com/78d5a112c5f275f4381703a3598662637fc257f5323b30fc331e36baf0acc212/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f447573434f667958634141395f46373f666f726d61743d6a7067266e616d653d6c61726765`}
            alt="Javascript Meme"
            layout="fll"
          />
          <div className="note-text my-3">
            <p>
              Catatan: Ketiga jenis variabel bisa menggunakan semua jenis tipe
              data yang ada di JavaScript
            </p>
          </div>
        </section>
      </WrapperTemplate>
    </Layout>
  );
}
