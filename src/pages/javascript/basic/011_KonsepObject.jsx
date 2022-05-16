import React from 'react'
import data_json from '../../../data-json/javascript/basic/011_konsep-object.json'
import TextStyle from '../../../components/TextStyle'
import WrapperTemplate from '../../../components/WrapperTemplate'
import SyntaxHighlighter from '../../../components/SyntaxHighlighter'

function KonsepObjectJS() {
    return (
        <WrapperTemplate>
            {
                data_json.map((data, i) => (
                    <section key={i} className='my-5'>
                        {data.title ? <h2 className="title-2">{data.title}</h2> : null}
                        {
                            data.text_1.map((val, key) => (
                                <p className="section_text" key={key}>
                                    <TextStyle list_text={val} />
                                </p>
                            ))
                        }
                        <SyntaxHighlighter code={data.code} />
                        {
                            data.text_2 ? (
                                data.text_2.map((val, key) => (
                                    <p className="section_text" key={key}>
                                        <TextStyle list_text={val} />
                                    </p>
                                ))
                            ) : null
                        }
                    </section>
                ))
            }
        </WrapperTemplate>
    )
}

export default KonsepObjectJS