import React, { Fragment } from 'react'
import LineCode from '../../../components/LineCode'
import SyntaxHighlighter from '../../../components/SyntaxHighlighter'
import TextStyle from '../../../components/TextStyle'
import WrapperTemplate from '../../../components/WrapperTemplate'
import data_json from '../../../data-json/javascript/004_string-dan-manipulasi-string.json'

function String_Manipulasi() {
    return (
        <WrapperTemplate>
            <section className='my-5'>
                <h2 className="title-2">String dan Cara Memanipulasinya</h2>
                {
                    data_json.declare_string.map((data, i) => (
                        <Fragment key={i}>
                            {data.title ? <h3 className="subtitle-h3">{data.title}</h3> : null}
                            {
                                TextStyle({ __text__: data.desc }).map((val, key) => (
                                    <p className="section_text" key={key} dangerouslySetInnerHTML={val}></p>
                                ))
                            }
                            {data.note ? <div className="note-text mb-3"><p>{data.note}</p></div> : null}
                            <p className="section_text">Contoh:</p>
                            {
                                data.code ? <SyntaxHighlighter code={data.code} /> : null
                            }
                        </Fragment>
                    ))
                }
                <h3 className="subtitle-h3">Manipulasi String</h3>
                {
                    data_json.string_manipulation.map((data, i) => (
                        <Fragment key={i}>
                            {
                                data.title ? TextStyle({ __text__: [data.title] }).map((val, key) => (
                                    <div className="section_text font-semibold" key={key} dangerouslySetInnerHTML={val}></div>
                                )) : null
                            }
                            {
                                data.desc ? TextStyle({ __text__: data.desc }).map((val, key) => (
                                    <p className="section_text" key={key} dangerouslySetInnerHTML={val}></p>
                                )) : null
                            }
                            <p className="section_text">Contoh:</p>
                            {
                                data.code ? (
                                    <SyntaxHighlighter code={data.code} />
                                ) : null
                            }
                            {
                                data.note ? (
                                    <div className="note-text mb-3">
                                        <p>{data.note}</p>
                                    </div>
                                ) : null
                            }
                        </Fragment>
                    ))
                }
            </section>
        </WrapperTemplate>
    )
}

export default String_Manipulasi