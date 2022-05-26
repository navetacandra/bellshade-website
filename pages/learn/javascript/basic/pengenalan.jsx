import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import dataJson from "@/data-json/javascript/basic/001_pengenalan.json";

export default function Page() {
  return (
    <Layout
      pageTitle="Bellshade | Javascript - Pengenalan"
      metaImage="/meta-image/javascript/basic/pengenalan.png"
    >
      <WrapperTemplate>
        <section className="my-5">
          <h2 className="title-2">Pengenalan Javascript</h2>
          <h4 className="subtitle-h3">Hello World</h4>
          <p className="section_text">
            Selamat datang di bahasa pemrograman javascript. Selamat menempuh
            jalan ninja sebagai programmer.
          </p>
          <p className="section_text">
            Untuk menampilkan tulisan, gunakan{" "}
            <code className="mark-text">console.log</code>
          </p>
          <SyntaxHighlighter code={dataJson.code} />
        </section>
      </WrapperTemplate>
    </Layout>
  );
}
