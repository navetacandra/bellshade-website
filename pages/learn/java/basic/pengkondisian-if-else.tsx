import { Fragment } from "react";
import OrderedList from "@/components/List/OrderedList";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import TextStyle from "@/components/TextStyle";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import dataJson from "@/data-json/java/basic/007_pengkondisian-if-else.json";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | Java - Pengkondisian (If-Else)'
      metaImage='/meta-image/learn/java/basic/pengkondisian-if-else.png'
    >
      <WrapperTemplate>
        <section className='my-5'>
          <h1 className='title-2'>Pengkondisian If-Else</h1>
          <OrderedList>
            {dataJson.map((val, key) => (
              <Fragment key={key}>
                <li className='section_text'>
                  <TextStyle Text={val.title} />
                </li>
                <div role='listitem'>
                  {val.desc.map((val1, key1) => (
                    <p className='section_text' key={key1}>
                      <TextStyle Text={val1} />
                    </p>
                  ))}
                  <p className='section_text'>Contoh:</p>
                  <SyntaxHighlighter code={val.code} />
                </div>
              </Fragment>
            ))}
          </OrderedList>
        </section>
      </WrapperTemplate>
    </Layout>
  );
}
