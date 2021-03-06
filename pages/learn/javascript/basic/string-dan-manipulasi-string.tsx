import { Fragment } from "react";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import TextStyle from "@/components/TextStyle";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import dataJson from "@/data-json/javascript/basic/004_string-dan-manipulasi-string.json";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | Javascript - String dan Manipulasi String'
      metaImage='/meta-image/learn/javascript/basic/string-dan-manipulasi-string.png'
    >
      <WrapperTemplate>
        <section className='my-5'>
          <h1 className='title-2'>String dan Cara Memanipulasinya</h1>
          {dataJson.declare_string.map((data, i) => (
            <Fragment key={i}>
              {data.title ? (
                <h2 className='subtitle-h3'>{data.title}</h2>
              ) : null}{" "}
              <p className='section_text'>
                {data.desc.map((val, key) => (
                  <TextStyle Text={val} key={key} />
                ))}
              </p>
              {data.note ? (
                <div className='note-text mb-3'>
                  <p>{data.note}</p>
                </div>
              ) : null}
              <p className='section_text'>Contoh:</p>
              {data.code ? <SyntaxHighlighter code={data.code} /> : null}
            </Fragment>
          ))}
          <h3 className='subtitle-h3'>Manipulasi String</h3>
          {dataJson.string_manipulation.map((data, i) => (
            <Fragment key={i}>
              {data.title
                ? [data.title].map((val, key) => (
                    <p className='section_text' key={key}>
                      <TextStyle Text={val} />
                    </p>
                  ))
                : null}

              <p className='section_text'>
                {data.desc.map((val, key) => (
                  <TextStyle Text={val} key={key} />
                ))}
              </p>
              <p className='section_text'>Contoh:</p>
              <SyntaxHighlighter code={data.code} />
              {data.note ? (
                <div className='note-text mb-3'>
                  <p>{data.note}</p>
                </div>
              ) : null}
            </Fragment>
          ))}
        </section>
      </WrapperTemplate>
    </Layout>
  );
}
