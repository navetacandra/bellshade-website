import React, { Fragment } from 'react'
import LineCode from '../../../components/LineCode'
import data_json from '../../../data-json/javascript/010_manipulasi-array.json'
import TextStyle from '../../../components/TextStyle'
import WrapperTemplate from '../../../components/WrapperTemplate'
import SyntaxHighlighter from '../../../components/SyntaxHighlighter'

function ManipulasiArrayJS() {
    return (
        <WrapperTemplate>
            <section className='my-5'>
                <h2 className="title-2">Manipulasi Array</h2>
                <h3 className="subtitle-h3">Jenis Method Untuk Memanipulasi Array</h3>
            </section>
            <section className="my-5">
                <ol className='ml-4'>
                    {
                        data_json.map((data, i) => (
                            <div key={i} className='ml-4'>
                                <h4 className='subtitle-h4 ml-3'>
                                    <li className='list-decimal'>{data.title}</li>
                                </h4>
                                {
                                    TextStyle({ __text__: data.desc }).map((val, key) => (
                                        <p className="section_text" key={key} dangerouslySetInnerHTML={val}></p>
                                    ))
                                }
                                <SyntaxHighlighter code={data.draft} />
                                {
                                    data.desc_1 ? (
                                        TextStyle({ __text__: data.desc_1 }).map((val, key) => (
                                            <p className="section_text" key={key} dangerouslySetInnerHTML={val}></p>
                                        ))
                                    ) : null
                                }
                                <ul className="mb-3">
                                    {
                                        TextStyle({ __text__: data.list }).map((val, key) => (
                                            <li key={key}>
                                                <p className="section_text" dangerouslySetInnerHTML={val}></p>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <p className="section_text">Contoh:</p>
                                {
                                    data.desc_2 ? (
                                        TextStyle({ __text__: data.desc_2 }).map((val, key) => (
                                            <p className="section_text" key={key} dangerouslySetInnerHTML={val}></p>
                                        ))
                                    ) : null
                                }
                                <SyntaxHighlighter code={data.code} />
                            </div>
                        ))
                    }
                </ol>
            </section>
        </WrapperTemplate>
    )
}

export default ManipulasiArrayJS