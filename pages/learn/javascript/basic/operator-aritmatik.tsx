import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import dataJson from "@/data-json/javascript/basic/005_aritmatik.json";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | Javascript - Operator Aritmatik'
      metaImage='/meta-image/learn/javascript/basic/operator-aritmatik.png'
    >
      <WrapperTemplate>
        <section className='my-5'>
          <h1 className='title-2'>Operasi Aritmatika pada Javascript</h1>
          <p className='section_text'>
            Aritmatika atau biasa disebut penghitungan merupakan cabang
            matematika yang mempelajari operasi dasar bilangan seperti
            penjumlahan, pengurangan, perkalian, pembagian, dan sebagainya.
          </p>
          <p className='section_text'>
            Setiap bahasa pemrograman termasuk javascript memiliki operator
            aritmatika untuk melakukan penghitungan dasar. Dalam Javascript
            sendiri terdapat beberapa operator yaitu :
          </p>
        </section>
        {dataJson.map((data, i) => (
          <section className='my-5' key={i}>
            <h2 className='subtitle-h4'>{data.title}</h2>
            <p className='section_text'>{data.desc}</p>
            {data.note ? (
              <div className='note-text'>
                <p>{data.note}</p>
              </div>
            ) : null}{" "}
            <p className='section_text'>Contoh:</p>
            <SyntaxHighlighter code={data.code} />
          </section>
        ))}
      </WrapperTemplate>
    </Layout>
  );
}
