import { Fragment } from 'react'
import data_json from '@/data-json/javascript/basic/012_manipulasi-object.json'
import TextStyle from '@/components/TextStyle'
import Layout from '@/components/Template/Layout'
import WrapperTemplate from '@/components/Template/WrapperTemplate'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'

export default function Page() {
    return (    
        <Layout pageTitle="Bellshade | Javascript - Manipulasi Objek">
            <WrapperTemplate>
                <section>
                    <h2 className="title-2">Method-Method untuk Memanipulasi Object</h2>
                    {
                        data_json.map((data, i) => (
                            <Fragment key={i}>
                                <h4 className="subtitle-h4">{data.title}</h4>
                                <p className="section_text">
                                    <TextStyle list_text={data.desc} />
                                </p>
                                <SyntaxHighlighter code={data.code} />
                            </Fragment>
                        ))
                    }                </section>
            </WrapperTemplate>
        </Layout>
    )
}