import { Fragment } from "react";
import dataJson from "@/data-json/javascript/basic/012_manipulasi-object.json";
import TextStyle from "@/components/TextStyle";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | Javascript - Manipulasi Objek'
      metaImage='/meta-image/learn/javascript/basic/manipulasi-objek.png'
    >
      <WrapperTemplate>
        <section>
          <h1 className='title-2'>Method-Method untuk Memanipulasi Object</h1>
          {dataJson.map((data, i) => (
            <Fragment key={i}>
              <h2 className='subtitle-h4'>{data.title}</h2>
              <p className='section_text'>
                <TextStyle Text={data.desc} />
              </p>
              <SyntaxHighlighter code={data.code} />
            </Fragment>
          ))}{" "}
        </section>
      </WrapperTemplate>
    </Layout>
  );
}
