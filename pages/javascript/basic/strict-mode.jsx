import { Fragment } from 'react'
import SyntaxHighlighter from '../../../components/SyntaxHighlighter'
import TextStyle from '../../../components/TextStyle'
import Layout from '../../../components/Template/Layout'
import WrapperTemplate from '../../../components/Template/WrapperTemplate'
import data_json from '../../../data-json/javascript/basic/013_strict-mode.json'

export default function Page() {
    return (    
        <Layout pageTitle="Bellshade | Javascript - Strict Mode">
            <WrapperTemplate>
                <section className="my-5">
                    <h2 className="title-2">Strict Mode</h2>
                    {
                        data_json.map((data, key) => (
                            <Fragment key={key}>
                                {
                                    typeof data.title === 'string' && !!data.title.length ? (
                                        [data.title].map((val, i) => (
                                            <h4 className="subtitle-h4" key={i}>
                                                <TextStyle list_text={val} />
                                            </h4>
                                        ))
                                    ) : null
                                }                                {
                                    typeof data.desc === 'object' && !!data.desc.length ? (
                                        data.desc.map((val, i) => (
                                            <p className="section_text" key={i}>
                                                <TextStyle list_text={val} />
                                            </p>
                                        ))
                                    ) : null
                                }
                                {
                                    typeof data.code === 'object' && !!data.code.length ? (
                                        <SyntaxHighlighter code={data.code} />
                                    ) : null
                                }
                            </Fragment>
                        ))
                    }
                </section>
            </WrapperTemplate>
        </Layout>
    )
}