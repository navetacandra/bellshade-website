import dataJson from "@/data-json/javascript/basic/009_konsep-array.json";
import TextStyle from "@/components/TextStyle";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | Javascript - Konsep Array'
      metaImage='/meta-image/learn/javascript/basic/konsep-array.png'
    >
      <WrapperTemplate>
        <section className='my-5'>
          <h2 className='title-2'>Belajar Penggunaan Array di Javascript</h2>
        </section>
        {dataJson.map((val, key) => (
          <section className='my-5' key={key}>
            <h4 className='subtitle-h4'>{val.title}</h4>
            <p className='section_text'>
              <TextStyle Text={val.desc} />
            </p>
            {val.note ? (
              <div className='note-text mb-3'>
                <p>{val.note}</p>
              </div>
            ) : null}{" "}
            <p className='section_text'>Contoh:</p>
            <SyntaxHighlighter code={val.code} />
          </section>
        ))}
      </WrapperTemplate>
    </Layout>
  );
}
