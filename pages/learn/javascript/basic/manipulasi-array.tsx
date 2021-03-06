import { Fragment } from "react";
import dataJson from "@/data-json/javascript/basic/010_manipulasi-array.json";
import TextStyle from "@/components/TextStyle";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import OrderedList from "@/components/List/OrderedList";
import UnorderedList from "@/components/List/UnorderedList";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | Javascript - Manipulasi Array'
      metaImage='/meta-image/learn/javascript/basic/manipulasi-array.png'
    >
      <WrapperTemplate>
        <section className='my-5'>
          <h2 className='title-2'>Manipulasi Array</h2>
          <h3 className='subtitle-h3'>Jenis Method Untuk Memanipulasi Array</h3>
        </section>
        <section className='my-5'>
          <OrderedList>
            {dataJson.map((data, i) => (
              <Fragment key={i}>
                <li>
                  <h4 className='subtitle-h4 ml-3'>{data.title}</h4>
                </li>
                <div role='listitem'>
                  {data.desc.map((val, key) => (
                    <p className='section_text' key={key}>
                      <TextStyle Text={val} />
                    </p>
                  ))}
                  <SyntaxHighlighter code={data.draft} />
                  {data.desc_1
                    ? data.desc_1.map((val, key) => (
                        <p className='section_test' key={key}>
                          <TextStyle Text={val} />
                        </p>
                      ))
                    : null}
                  <UnorderedList className='my-3'>
                    {data.list.map((val, key) => (
                      <li key={key}>
                        <p className='section_text'>
                          <TextStyle Text={val} />
                        </p>
                      </li>
                    ))}
                  </UnorderedList>
                  <p className='section_text'>Contoh:</p>
                  {data.desc_2
                    ? data.desc.map((val, key) => (
                        <p className='section_text' key={key}>
                          <TextStyle Text={val} />
                        </p>
                      ))
                    : null}
                  <SyntaxHighlighter code={data.code} />
                </div>
              </Fragment>
            ))}
          </OrderedList>
        </section>
      </WrapperTemplate>
    </Layout>
  );
}
