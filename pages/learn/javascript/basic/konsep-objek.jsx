import dataJson from "@/data-json/javascript/basic/011_konsep-object.json";
import TextStyle from "@/components/TextStyle";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";

export default function Page() {
  return (
    <Layout
      pageTitle="Bellshade | Javascript - Konsep Objek"
      metaImage="/meta-image/javascript/basic/konsep-objek.png"
    >
      <WrapperTemplate>
        {dataJson.map((data, i) => (
          <section key={i} className="my-5">
            {data.title ? <h2 className="title-2">{data.title}</h2> : null}{" "}
            {data.text_1.map((val, key) => (
              <p className="section_text" key={key}>
                <TextStyle Text={val} />
              </p>
            ))}
            <SyntaxHighlighter code={data.code} />
            {data.text_2
              ? data.text_2.map((val, key) => (
                  <p className="section_text" key={key}>
                    <TextStyle Text={val} />
                  </p>
                ))
              : null}
          </section>
        ))}
      </WrapperTemplate>
    </Layout>
  );
}
