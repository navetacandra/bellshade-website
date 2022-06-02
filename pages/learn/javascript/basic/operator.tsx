import { Fragment } from "react";
import OrderedList from "@/components/List/OrderedList";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import TextStyle from "@/components/TextStyle";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import dataJson from "@/data-json/javascript/basic/003_operator.json";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | Javascript - Operator'
      metaImage='/meta-image/learn/javascript/basic/operator.png'
    >
      <WrapperTemplate>
        <section className='my-5'>
          <h1 className='title-2'>Operator</h1>
          {dataJson["text-1"].map((val, key) => (
            <p className='section_text' key={key}>
              {val}
            </p>
          ))}{" "}
        </section>
        <section className='my-5'>
          <h2 className='subtitle-h3'>
            Javascript comparison (perbandingan) operator
          </h2>
          <p className='section_text'>
            Banyak jenis operasi perbandingan. Macam-macamnya yaitu:
          </p>
          <OrderedList>
            {dataJson["comparison-operator"].map((val, key) => (
              <Fragment key={key}>
                {[val.title].map((val1, key1) => (
                  <li key={key1}>
                    <p className='section_text'>
                      <TextStyle Text={val1} />
                    </p>
                  </li>
                ))}
                <div role='listitem'>
                  <p className='section_text'>{val.desc}</p>
                  <p className='section_text'>Contoh:</p>
                  <SyntaxHighlighter code={val.code} />
                </div>
              </Fragment>
            ))}
          </OrderedList>
        </section>
        <section className='my-5'>
          <h2 className='subtitle-h3'>Javascript logical (logika) operator</h2>
          {dataJson["text-2"].map((val, key) => (
            <p className='section_text' key={key}>
              {val}
            </p>
          ))}
          <OrderedList>
            {dataJson["logical-operator"].map((val, key) => (
              <Fragment key={key}>
                {[val.title].map((val1, key1) => (
                  <li key={key1}>
                    <p className='section_text'>
                      <TextStyle Text={val1} />
                    </p>
                  </li>
                ))}
                <div role='listitem'>
                  <p className='section_text'>{val.desc}</p>
                  <p className='section_text'>Contoh:</p>
                  <SyntaxHighlighter code={val.code} />
                </div>
              </Fragment>
            ))}
          </OrderedList>
        </section>
        {dataJson["other-operator"].map((val, key) => (
          <section key={key} className='my-5 ml-4'>
            <h3 className='subtitle-h3'>{val.title}</h3>
            {[val.desc].map((val1, key1) => (
              <p className='section_text' key={key1}>
                <TextStyle Text={val1} />
              </p>
            ))}
            {val.note ? (
              <div className='note-text mb-3'>
                <p>{val.note}</p>
              </div>
            ) : null}
            <p className='section_text'>Contoh:</p>
            <SyntaxHighlighter code={val.code} />
          </section>
        ))}
      </WrapperTemplate>
    </Layout>
  );
}
