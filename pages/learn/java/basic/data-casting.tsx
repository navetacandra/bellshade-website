import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import dataJson from "@/data-json/java/basic/003_data-casting.json";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | Java - Data Casting'
      metaImage='/meta-image/learn/java/basic/data-casting.png'
    >
      <WrapperTemplate>
        <section className='my-5'>
          <h2 className='title-2'>Data Casting</h2>
          <p className='section_text'>
            Data Casting (atau biasa disebut type casting) adalah salah satu
            teknik dimana merubah tipe data primitif tipe data primitif lainnya.
          </p>
        </section>
        {dataJson.map((data, i) => (
          <section className='my-5' key={i}>
            <h3 className='subtitle-h3'>{data.title}</h3>
            <p className='section_text'>{data.desc}</p>
            <div className='note-text'>
              <p>{data.notes}</p>
            </div>
            {data.code && !!data.code.length ? (
              <SyntaxHighlighter code={data.code} />
            ) : null}
          </section>
        ))}
      </WrapperTemplate>
    </Layout>
  );
}
