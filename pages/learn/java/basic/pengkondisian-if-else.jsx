import { Fragment } from "react";
import OrderedList from '@/components/List/OrderedList';
import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import TextStyle from "@/components/TextStyle";
import Layout from '@/components/Template/Layout'
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import data_json from  "@/data-json/java/basic/007_pengkondisian-if-else.json";

export default function Page() {
    return (    
        <Layout pageTitle="Bellshade | Java - Struktur Kontrol (If-Else)">
            <WrapperTemplate>
                <section className="my-5">
                    <h2 className="title-2">Pengkondisian If-Else</h2>
                    <OrderedList>
                        {
                            data_json.map((val, key) => (
                                <Fragment key={key}>
                                    <li className='section_text'>
                                        <TextStyle list_text={val.title} />
                                    </li>
                                    {
                                        val.desc.map((val1, key1) => (
                                            <p className="section_text" key={key1}>
                                                <TextStyle list_text={val1} />
                                            </p>
                                        ))
                                    }
                                    <p className="section_text">Contoh:</p>
                                    <SyntaxHighlighter code={val.code} />
                                </Fragment>
                            ))
                        }
                    </OrderedList>
                </section>
            </WrapperTemplate>
        </Layout>
    )
}